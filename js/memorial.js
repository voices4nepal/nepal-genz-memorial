// Memorial Profiles Manager
class MemorialProfiles {
  constructor() {
    this.profiles = [];
    this.profilesContainer = null;
    this.currentSort = "asc"; // 'asc' for A-Z, 'desc' for Z-A
  }

  async init() {
    try {
      await this.loadProfiles();
      this.setupSortControls();
      this.renderProfiles();
    } catch (error) {
      console.error("Error initializing memorial profiles:", error);
      this.showFallbackContent();
    }
  }

  async loadProfiles() {
    try {
      const response = await fetch("data/profiles.json");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      this.profiles = await response.json();
      // Sort profiles alphabetically by name (default A-Z)
      this.sortProfiles("asc");
    } catch (error) {
      console.error("Error loading profiles:", error);
      throw error;
    }
  }

  sortProfiles(direction) {
    this.currentSort = direction;
    if (direction === "asc") {
      this.profiles.sort((a, b) => a.name.localeCompare(b.name));
    } else {
      this.profiles.sort((a, b) => b.name.localeCompare(a.name));
    }
  }

  setupSortControls() {
    const sortAZ = document.getElementById("sort-az");
    const sortZA = document.getElementById("sort-za");

    if (sortAZ && sortZA) {
      sortAZ.addEventListener("click", () => {
        this.sortProfiles("asc");
        this.updateSortButtons("asc");
        this.renderProfiles();
      });

      sortZA.addEventListener("click", () => {
        this.sortProfiles("desc");
        this.updateSortButtons("desc");
        this.renderProfiles();
      });
    }
  }

  updateSortButtons(activeSort) {
    const sortAZ = document.getElementById("sort-az");
    const sortZA = document.getElementById("sort-za");

    if (sortAZ && sortZA) {
      sortAZ.classList.toggle("active", activeSort === "asc");
      sortZA.classList.toggle("active", activeSort === "desc");
    }
  }

  renderProfiles() {
    this.profilesContainer = document.getElementById("profiles-grid");
    if (!this.profilesContainer) {
      console.error("Profiles container not found");
      return;
    }

    // Update profile count
    this.updateProfileCount();

    // Clear existing content
    this.profilesContainer.innerHTML = "";

    // Render each profile
    this.profiles.forEach((profile) => {
      const profileCard = this.createProfileCard(profile);
      this.profilesContainer.appendChild(profileCard);
    });
  }

  updateProfileCount() {
    const countElement = document.getElementById("profile-count");
    if (countElement) {
      const count = this.profiles.length;
      countElement.textContent = `Remembering ${count} heroes`;
    }
  }

  createProfileCard(profile) {
    const card = document.createElement("div");
    card.className = "profile-card";

    // Validate description length
    const description = this.validateDescription(profile.description);

    card.innerHTML = `
            <div class="profile-image">
                <img 
                    src="${profile.photo}" 
                    alt="${profile.name}"
                    onerror="this.onerror=null;this.src='images/diyo.png';this.classList.add('fallback-image');"
                    loading="lazy"
                />
            </div>
            <div class="profile-info">
                <h3 class="name">${this.escapeHtml(profile.name)}</h3>
                <p class="age">Age: ${profile.age}</p>
                <p class="description">${this.escapeHtml(description)}</p>
            </div>
        `;

    return card;
  }

  validateDescription(description) {
    if (!description) return "No description available.";
    if (description.length > 200) {
      return description.substring(0, 197) + "...";
    }
    return description;
  }

  escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  showFallbackContent() {
    this.profilesContainer = document.getElementById("profiles-grid");
    if (!this.profilesContainer) return;

    this.profilesContainer.innerHTML = `
            <div class="fallback-message">
                <h3>Loading Memorial Profiles...</h3>
                <p>If profiles don't load, please check the data/profiles.json file.</p>
            </div>
        `;
  }
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const memorial = new MemorialProfiles();
  memorial.init();
});

// Export for potential use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = MemorialProfiles;
}
