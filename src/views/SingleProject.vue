<script>
import feather from "feather-icons";
import ProjectHeader from "../components/projects/ProjectHeader.vue";
import ProjectGallery from "../components/projects/ProjectGallery.vue";
import ProjectInfo from "../components/projects/ProjectInfo.vue";
import ProjectRelatedProjects from "../components/projects/ProjectRelatedProjects.vue";

export default {
  name: "Projects",
  components: {
    ProjectHeader,
    ProjectGallery,
    ProjectInfo,
    ProjectRelatedProjects,
  },
  data: () => {
    return {
      singleProjectHeader: {
        singleProjectTitle: "Godstime SPICES",
        singleProjectDate: "",
        singleProjectTag: "Front-End Designs",
      },
      projectImages: [
        {
          id: 1,
          title: "Godstime Project Management UI",
          img: require("@/assets/images/codinglaptop.png"),
        },
        {
          id: 2,
          title: "Godstime Project Management UI",
          img: require("@/assets/images/codinglaptops2.png"),
        },
        {
          id: 3,
          title: "Godstime Project Management UI",
          img: require("@/assets/images/responsive.png"),
        },
      ],
      projectInfo: {
        clientHeading: "",
        companyInfos: [
          {
            id: 1,
            title: "Name",
            details: "Godstime",
          },
          {
            id: 2,
            title: "Services",
            details: "Front-end web Development",
          },
          {
            id: 3,
            title: "email",
            details: "audugodstime95@gmail.com",
          },
          {
            id: 4,
            title: "Phone",
            details: "09012902537",
          },
        ],
        technologies: [
          {
            title: "Tools & Technologies",
            techs: [
              "HTML",
              "CSS",
              "JavaScript",
              "Vue.js",
              "TailwindCSS, React, next.jx, nuxt.js",
            ],
          },
        ],
      },
      relatedProject: {
        relatedProjectsHeading: "Related Projects",
        relatedProjects: [
          {
            id: 1,
            title: "Mobile UI",
            img: require("@/assets/images/mobile-project-1.jpg"),
          },
          {
            id: 2,
            title: "Web Application",
            img: require("@/assets/images/web-project-1.jpg"),
          },
          {
            id: 3,
            title: "UI Design",
            img: require("@/assets/images/ui-project-2.jpg"),
          },
          {
            id: 4,
            title: "Godstime Mobile App UI",
            img: require("@/assets/images/mobile-project-2.jpg"),
          },
        ],
      },
    };
  },
  mounted() {
    feather.replace();
  },
  updated() {
    feather.replace();
  },
  methods: {},
};
</script>

<template>
  <div class="container mx-auto mt-10 sm:mt-20">
    <!-- Project header -->
    <ProjectHeader :singleProjectHeader="singleProjectHeader" />

    <!-- Project gallery -->
    <ProjectGallery :projectImages="projectImages" />

    <!-- Project information -->
    <ProjectInfo :projectInfo="projectInfo" />

    <!-- Project related projects -->
    <ProjectRelatedProjects :relatedProject="relatedProject" />
  </div>
</template>

<style scoped></style>
