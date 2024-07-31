// Assignment

const complexObject = {
    company: {
      name: "Tech Solutions",
      departments: [
        {
          name: "Development",
          teams: [
            {
              name: "Backend",
              members: [
                {
                  name: "Alice",
                  role: "Senior Developer",
                  skills: ["Node.js", "GraphQL"],
                },
                {
                  name: "Bob",
                  role: "Junior Developer",
                  skills: ["Java", "Spring Boot"],
                },
              ],
              projects: [
                {
                  title: "Project A",
                  deadline: "2024-12-31",
                  status: "In Progress",
                  details: {
                    budget: 100000,
                    milestones: [
                      { milestone: "Phase 1", completed: true },
                      { milestone: "Phase 2", completed: false },
                    ],
                  },
                },
              ],
            },
            {
              name: "Frontend",
              members: [
                {
                  name: "Charlie",
                  role: "Lead Developer",
                  skills: ["React", "Redux"],
                },
                { name: "Dave", role: "Developer", skills: ["Vue", "Vuex"] },
              ],
              projects: [
                {
                  title: "Project B",
                  deadline: "2024-11-30",
                  status: "Completed",
                  details: {
                    budget: 150000,
                    milestones: [
                      { milestone: "Phase 1", completed: true },
                      { milestone: "Phase 2", completed: true },
                    ],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "Marketing",
          teams: [
            {
              name: "Content",
              members: [
                {
                  name: "Eve",
                  role: "Content Strategist",
                  skills: ["SEO", "Copywriting"],
                },
                {
                  name: "Frank",
                  role: "Content Writer",
                  skills: ["Blogging", "Editing"],
                },
              ],
              campaigns: [
                {
                  title: "Campaign X",
                  budget: 50000,
                  performance: {
                    reach: 100000,
                    engagement: 5000,
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  };
  // Task:
  // 1. Console.log the role of the second member of the Backend team in the Development department.
  // 2. Change the status of "Project B" to "In Review"
console.log(complexObject.company.departments[0].teams[0].members[1].role)
complexObject.company.departments[0].teams[1].projects[0].status = "In Review"
console.log(complexObject.company.departments[0].teams[1].projects[0].status)