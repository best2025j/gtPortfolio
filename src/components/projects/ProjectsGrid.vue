<script>
import feather from "feather-icons";
import ProjectsFilter from "./ProjectsFilter.vue";
import ProjectSingle from "./ProjectSingle.vue";
import projects from "../../data/projects";

export default {
  components: { ProjectSingle, ProjectsFilter },
  data: () => {
    return {
      projects,
      projectsHeading: "FRONT-END DEV",
      selectedCategory: "",
      searchProject: "",
      search: "",
    };
  },

  // computed: {
  //   // Get the filtered projects
  //   filteredProjects() {
  //     if (this.selectedCategory) {
  //       return this.filterProjectsByCategory();
  //     } else if (this.searchProject) {
  //       return this.filterProjectsBySearch();
  //     }
  //     return this.projects;
  //   },
  // },

  computed: {
    // Get the filtered projects
    filteredProjects() {
      let filtered;
      if (this.selectedCategory) {
        filtered = this.filterProjectsByCategory();
      } else if (this.searchProject) {
        filtered = this.filterProjectsBySearch();
      } else {
        filtered = this.projects;
      }

      // Only show 3 projects if not on the projects page
      if (!this.$route.path.includes("/projects")) {
        return filtered.slice(0, 3);
      }
      return filtered;
    },
  },

  methods: {
    // Filter projects by category
    // filterProjectsByCategory() {
    //   return this.projects.filter((item) => {
    //     let category =
    //       item.category.charAt(0).toUpperCase() + item.category.slice(1);
    //     console.log(category);
    //     return category.includes(this.selectedCategory);
    //   });
    // },

    //  Filter projects by category and stark
    filterProjectsByCategory() {
      if (!this.selectedCategory || this.selectedCategory === "All Projects") {
        return this.projects;
      }
      return this.projects.filter((project) =>
        project.stack.includes(this.selectedCategory)
      );
    },

    // Filter projects by title search
    filterProjectsBySearch() {
      let project = new RegExp(this.searchProject, "i");
      return this.projects.filter((el) => el.title.match(project));
    },
  },

  mounted() {
    feather.replace();
  },
};
</script>

<template>
  <!-- Projects grid -->
  <section class="pt-10 sm:pt-14">
    <!-- Projects grid title -->
    <div class="text-center">
      <p
        class="font-general-semibold text-2xl sm:text-3xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"
      >
        {{ projectsHeading }}
      </p>
    </div>

    <!-- Filter and search projects -->
    <div class="mt-10 sm:mt-10">
      <h3
        class="font-general-regular font-bold text-center text-secondary-dark dark:text-ternary-light text-md sm:text-lg mb-4"
      >
        Samples
      </h3>

      <div
        class="flex items-center justify-between w-full border-b border-primary-light dark:border-secondary-dark pb-3 gap-2"
      >
        <div class="flex gap-2 flex-grow basis-0">
          <span
            class="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"
          >
            <i
              data-feather="search"
              class="text-ternary-dark dark:text-ternary-light"
            ></i>
          </span>
          <input
            v-model="searchProject"
            class="font-general-medium py-2 border-1 w-full md:w-auto border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
            id="name"
            name="name"
            type="search"
            required=""
            placeholder="Search Projects"
            aria-label="Name"
          />
        </div>

        <div class="flex-1 md:flex-none">
          <ProjectsFilter
            @filter="selectedCategory = $event"
            :select="selectedCategory"
          />
        </div>
      </div>
    </div>

    <!-- Projects grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
      <ProjectSingle
        v-for="project in filteredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </section>
</template>

<style scoped></style>
