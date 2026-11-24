(() => {
  "use strict";

  const documentRoot = document.documentElement;
  documentRoot.classList.add("js-enabled");

  const initializers = [
    initTheme,
    initMobileMenu,
    initScrollSpy,
    initProjectFilters,
    initGallery,
    initReveals,
    initCounters,
    initContactForm,
    initBackToTop,
    initFooterYear,
  ];

  // Each enhancement is isolated so one unsupported optional feature cannot stop the rest.
  initializers.forEach((initialize) => {
    try {
      initialize();
    } catch {
      // Native content and controls remain available through progressive enhancement fallbacks.
    }
  });

  function listenForMediaChange(mediaQuery, listener) {
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", listener);
    } else if (typeof mediaQuery.addListener === "function") {
      mediaQuery.addListener(listener);
    }
  }

  function initTheme() {
    const toggle = document.querySelector("[data-theme-toggle]");
    if (!toggle) return;

    const storageKey = "portfolio-theme";
    const systemLight = window.matchMedia
      ? window.matchMedia("(prefers-color-scheme: light)")
      : null;
    let selectedTheme = null;

    try {
      const storedTheme = window.localStorage.getItem(storageKey);
      if (storedTheme === "light" || storedTheme === "dark") {
        selectedTheme = storedTheme;
        documentRoot.dataset.theme = storedTheme;
      }
    } catch {
      // A blocked storage API must not prevent an in-page theme change.
    }

    const getEffectiveTheme = () => {
      if (selectedTheme) return selectedTheme;
      return systemLight?.matches ? "light" : "dark";
    };

    const updateToggle = () => {
      const currentTheme = getEffectiveTheme();
      const lightIsActive = currentTheme === "light";
      toggle.textContent = lightIsActive ? "Light" : "Dark";
      toggle.setAttribute("aria-pressed", String(lightIsActive));
      toggle.setAttribute(
        "aria-label",
        lightIsActive ? "Switch to dark theme" : "Switch to light theme",
      );
    };

    const handleToggle = () => {
      selectedTheme = getEffectiveTheme() === "light" ? "dark" : "light";
      documentRoot.dataset.theme = selectedTheme;

      try {
        window.localStorage.setItem(storageKey, selectedTheme);
      } catch {
        // The explicit choice still applies for the current page view.
      }

      updateToggle();
    };

    toggle.addEventListener("click", handleToggle);
    if (systemLight) {
      listenForMediaChange(systemLight, () => {
        if (!selectedTheme) updateToggle();
      });
    }

    updateToggle();
    toggle.hidden = false;
  }

  function initMobileMenu() {
    const header = document.querySelector("[data-site-header]");
    const toggle = document.querySelector("[data-menu-toggle]");
    const navigation = document.querySelector("#primary-navigation");
    if (!header || !toggle || !navigation || !window.matchMedia) return;

    // This condition exactly matches style.css: desktop begins at 68rem (1088px).
    const mobileViewport = window.matchMedia("(max-width: 67.99rem)");

    const setOpen = (isOpen, { restoreFocus = false } = {}) => {
      const nextState = Boolean(isOpen && mobileViewport.matches);
      header.dataset.menuOpen = String(nextState);
      toggle.setAttribute("aria-expanded", String(nextState));
      toggle.setAttribute(
        "aria-label",
        nextState ? "Close navigation menu" : "Open navigation menu",
      );
      toggle.textContent = nextState ? "Close" : "Menu";

      if (restoreFocus && document.activeElement !== toggle) {
        toggle.focus();
      }
    };

    toggle.addEventListener("click", () => {
      const isOpen = toggle.getAttribute("aria-expanded") === "true";
      setOpen(!isOpen);
    });

    navigation.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener("click", () => setOpen(false));
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setOpen(false, { restoreFocus: true });
      }
    });

    listenForMediaChange(mobileViewport, () => setOpen(false));

    setOpen(false);
    toggle.hidden = false;
    header.dataset.menuReady = "true";
  }

  function initScrollSpy() {
    const navigation = document.querySelector("#primary-navigation");
    if (!navigation) return;

    const links = Array.from(navigation.querySelectorAll('a[href^="#"]'));
    const linkBySection = new Map();

    links.forEach((link) => {
      const sectionId = link.getAttribute("href")?.slice(1);
      if (sectionId && document.getElementById(sectionId)) {
        linkBySection.set(sectionId, link);
      }
    });

    const sections = Array.from(linkBySection.keys())
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean);
    if (!sections.length) return;

    let activeSectionId = null;
    const setCurrent = (sectionId) => {
      const nextId = linkBySection.has(sectionId) ? sectionId : null;
      if (nextId === activeSectionId) return;

      links.forEach((link) => link.removeAttribute("aria-current"));
      if (nextId) linkBySection.get(nextId).setAttribute("aria-current", "location");
      activeSectionId = nextId;
    };

    const currentHashId = window.location.hash.slice(1);
    if (linkBySection.has(currentHashId)) setCurrent(currentHashId);

    links.forEach((link) => {
      link.addEventListener("click", () => setCurrent(link.getAttribute("href").slice(1)));
    });

    window.addEventListener("hashchange", () => {
      const sectionId = window.location.hash.slice(1);
      if (linkBySection.has(sectionId)) setCurrent(sectionId);
    });

    if ("IntersectionObserver" in window) {
      const intersectingSections = new Set();
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              intersectingSections.add(entry.target.id);
            } else {
              intersectingSections.delete(entry.target.id);
            }
          });

          const visibleSection = sections
            .filter((section) => intersectingSections.has(section.id))
            .at(-1);

          if (visibleSection) {
            setCurrent(visibleSection.id);
          } else if (window.scrollY < sections[0].offsetTop / 2) {
            setCurrent(null);
          } else if (
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 2
          ) {
            setCurrent(sections.at(-1).id);
          }
        },
        {
          rootMargin: "-30% 0px -60% 0px",
          threshold: 0,
        },
      );

      sections.forEach((section) => observer.observe(section));
      return;
    }

    // Older-browser fallback: at most one inexpensive section check per animation frame.
    let updateQueued = false;
    const updateFromScroll = () => {
      updateQueued = false;
      const headerHeight = document.querySelector(".site-header")?.offsetHeight || 0;
      const marker = headerHeight + window.innerHeight * 0.25;
      let currentSection = null;

      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= marker) currentSection = section;
      });

      setCurrent(currentSection?.id || null);
    };

    const requestUpdate = () => {
      if (updateQueued) return;
      updateQueued = true;
      if (window.requestAnimationFrame) {
        window.requestAnimationFrame(updateFromScroll);
      } else {
        updateFromScroll();
      }
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    updateFromScroll();
  }

  function initProjectFilters() {
    const filterBar = document.querySelector("[data-project-filters]");
    const status = filterBar?.querySelector("[data-filter-status]");
    const buttons = Array.from(filterBar?.querySelectorAll("[data-project-filter]") || []);
    const cards = Array.from(document.querySelectorAll("[data-project-card]"));
    if (!filterBar || !status || !buttons.length || !cards.length) return;

    const applyFilter = (filter, selectedButton) => {
      let visibleCount = 0;

      cards.forEach((card) => {
        const categories = (card.dataset.categories || "").split(/\s+/).filter(Boolean);
        const matches = filter === "all" || categories.includes(filter);
        card.hidden = !matches;
        if (matches) visibleCount += 1;
      });

      buttons.forEach((button) => {
        button.setAttribute("aria-pressed", String(button === selectedButton));
      });

      if (!visibleCount) {
        status.textContent = "No projects match this filter.";
      } else if (filter === "all") {
        status.textContent = `Showing all ${visibleCount} projects.`;
      } else {
        const label = selectedButton.textContent.trim();
        const noun = visibleCount === 1 ? "project" : "projects";
        status.textContent = `Showing ${visibleCount} ${noun} in ${label}.`;
      }
    };

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        applyFilter(button.dataset.projectFilter || "all", button);
      });
    });

    const initialButton = buttons.find((button) => button.dataset.projectFilter === "all") || buttons[0];
    applyFilter(initialButton.dataset.projectFilter || "all", initialButton);
    filterBar.hidden = false;
  }

  function initGallery() {
    const dialog = document.querySelector("[data-gallery-dialog]");
    const content = dialog?.querySelector("[data-gallery-dialog-content]");
    const closeButton = dialog?.querySelector('form[method="dialog"] button');
    const triggers = Array.from(document.querySelectorAll("[data-gallery-trigger]"));
    if (
      !dialog ||
      !content ||
      !closeButton ||
      !triggers.length ||
      typeof dialog.showModal !== "function" ||
      typeof dialog.close !== "function"
    ) {
      return;
    }

    let openingTrigger = null;

    const disableViewer = () => {
      triggers.forEach((trigger) => {
        trigger.hidden = true;
      });
    };

    const openViewer = (trigger) => {
      const figure = trigger.closest("figure");
      const sourceImage = figure?.querySelector("img");
      const source = trigger.dataset.gallerySrc || sourceImage?.getAttribute("src");
      if (!source || !sourceImage) return;

      const viewerImage = document.createElement("img");
      viewerImage.src = source;
      viewerImage.alt = sourceImage.alt;
      viewerImage.decoding = "async";
      if (sourceImage.width) viewerImage.width = sourceImage.width;
      if (sourceImage.height) viewerImage.height = sourceImage.height;

      const caption = document.createElement("figcaption");
      caption.textContent =
        trigger.dataset.galleryCaption || figure.querySelector("figcaption")?.textContent || "";

      content.replaceChildren(viewerImage, caption);
      openingTrigger = trigger;
      document.body.classList.add("dialog-open");

      try {
        dialog.showModal();
        closeButton.focus();
      } catch {
        document.body.classList.remove("dialog-open");
        content.replaceChildren();
        openingTrigger = null;
        disableViewer();
      }
    };

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => openViewer(trigger));
    });

    dialog.addEventListener("close", () => {
      document.body.classList.remove("dialog-open");
      content.replaceChildren();

      if (openingTrigger?.isConnected && !openingTrigger.hidden) {
        openingTrigger.focus();
      }
      openingTrigger = null;
    });

    triggers.forEach((trigger) => {
      trigger.hidden = false;
    });
  }

  function initReveals() {
    if (!("IntersectionObserver" in window) || !window.matchMedia) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const elements = Array.from(
      document.querySelectorAll(
        ".section > h2, .specialty-card, .skill-group, .project-card, .experience__group, .achievement-list li, .certification-list li",
      ),
    );
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0.08 },
    );

    elements.forEach((element) => {
      element.classList.add("reveal-ready");
      try {
        observer.observe(element);
      } catch {
        element.classList.remove("reveal-ready");
      }
    });
  }

  function initCounters() {
    const counters = Array.from(document.querySelectorAll("[data-counter-target]"));
    if (!counters.length) return;

    const numberFormatter = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });
    const states = counters
      .map((counter) => {
        const target = Number(counter.dataset.counterTarget);
        if (!Number.isFinite(target) || target < 0) return null;

        const suffix = counter.dataset.counterSuffix || "";
        const finalText = counter.textContent.trim();
        const accessibleValue = document.createElement("span");
        const visualValue = document.createElement("span");

        accessibleValue.className = "visually-hidden";
        accessibleValue.textContent = finalText;
        visualValue.className = "counter-visual";
        visualValue.setAttribute("aria-hidden", "true");
        visualValue.textContent = finalText;
        counter.replaceChildren(accessibleValue, visualValue);

        return { counter, visualValue, target, suffix, finalText, finished: false };
      })
      .filter(Boolean);
    if (!states.length) return;

    const finish = (state) => {
      state.visualValue.textContent = state.finalText;
      state.finished = true;
    };

    const reducedMotion = window.matchMedia
      ? window.matchMedia("(prefers-reduced-motion: reduce)")
      : null;
    if (
      reducedMotion?.matches ||
      !("IntersectionObserver" in window) ||
      typeof window.requestAnimationFrame !== "function"
    ) {
      states.forEach(finish);
      return;
    }

    states.forEach((state) => {
      state.visualValue.textContent = "0";
    });

    const animate = (state) => {
      if (state.finished) return;
      const duration = 900;
      let startTime = null;

      const drawFrame = (timestamp) => {
        if (startTime === null) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        const easedProgress = 1 - (1 - progress) ** 3;
        const displayValue = Math.round(state.target * easedProgress);
        state.visualValue.textContent = `${numberFormatter.format(displayValue)}${state.suffix}`;

        if (progress < 1 && !state.finished) {
          window.requestAnimationFrame(drawFrame);
        } else {
          finish(state);
        }
      };

      window.requestAnimationFrame(drawFrame);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const state = states.find((candidate) => candidate.counter === entry.target);
          if (state) animate(state);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.35 },
    );

    states.forEach((state) => observer.observe(state.counter));
    listenForMediaChange(reducedMotion, (event) => {
      if (!event.matches) return;
      observer.disconnect();
      states.forEach(finish);
    });
  }

  function initContactForm() {
    const form = document.querySelector("[data-contact-form]");
    const submitButton = form?.querySelector("[data-contact-submit]");
    const status = form?.querySelector("[data-contact-status]");
    if (!form || !submitButton || !status) return;

    const fields = {
      name: form.elements.namedItem("name"),
      email: form.elements.namedItem("email"),
      subject: form.elements.namedItem("subject"),
      message: form.elements.namedItem("message"),
    };
    const errors = Object.fromEntries(
      Object.keys(fields).map((name) => [name, form.querySelector(`[data-error-for="${name}"]`)]),
    );
    if (Object.values(fields).some((field) => !field) || Object.values(errors).some((error) => !error)) {
      return;
    }

    const getErrorMessage = (name) => {
      const field = fields[name];
      const value = field.value.trim();
      if (!value) {
        return {
          name: "Enter your name.",
          email: "Enter your email address.",
          subject: "Enter a subject.",
          message: "Enter a message.",
        }[name];
      }

      if (name === "email" && field.validity.typeMismatch) {
        return "Enter a valid email address.";
      }
      if (field.validity.tooLong) {
        return `Keep this field within ${field.maxLength.toLocaleString("en-US")} characters.`;
      }
      return "";
    };

    const showFieldError = (name, message) => {
      const field = fields[name];
      const error = errors[name];
      error.textContent = message;
      error.hidden = !message;

      if (message) {
        field.setAttribute("aria-invalid", "true");
        field.setAttribute("aria-errormessage", error.id);
      } else {
        field.removeAttribute("aria-invalid");
        field.removeAttribute("aria-errormessage");
      }
    };

    Object.keys(fields).forEach((name) => {
      fields[name].addEventListener("input", () => {
        if (fields[name].getAttribute("aria-invalid") === "true") {
          showFieldError(name, getErrorMessage(name));
        }
        status.textContent = "";
      });
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      let firstInvalidField = null;

      Object.keys(fields).forEach((name) => {
        const message = getErrorMessage(name);
        showFieldError(name, message);
        if (message && !firstInvalidField) firstInvalidField = fields[name];
      });

      if (firstInvalidField) {
        status.textContent = "Review the highlighted fields before composing your email.";
        firstInvalidField.focus();
        return;
      }

      const subject = fields.subject.value.trim();
      const body = [
        `Name: ${fields.name.value.trim()}`,
        `Email: ${fields.email.value.trim()}`,
        "",
        "Message:",
        fields.message.value.trim(),
      ].join("\r\n");
      const mailto = `mailto:bilalkoubar014@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      status.textContent =
        "Opening your email app. If it did not open, email bilalkoubar014@gmail.com directly.";
      try {
        window.location.assign(mailto);
      } catch {
        status.textContent =
          "If your email app did not open, email bilalkoubar014@gmail.com directly.";
      }
    });

    form.noValidate = true;
    submitButton.disabled = false;
    form.hidden = false;
  }

  function initBackToTop() {
    const link = document.querySelector(".back-to-top");
    if (!link) return;

    const updateVisibility = () => {
      link.classList.toggle("is-visible", window.scrollY >= 600);
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });
    link.classList.add("back-to-top--enhanced");
    updateVisibility();
  }

  function initFooterYear() {
    const year = document.querySelector("[data-current-year]");
    if (!year) return;

    const currentYear = new Date().getFullYear();
    if (currentYear >= 2000 && currentYear <= 2100) {
      year.textContent = String(currentYear);
    }
  }
})();
