const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Prepare Report",
        description: "Compile the monthly sales report.",
        date: "2025-01-15",
        category: "Documentation",
        active: true,
        completed: false,
        failed: false,
      },
      {
        title: "Team Meeting",
        description: "Attend the weekly team sync-up.",
        date: "2025-01-16",
        category: "Meetings",
        active: false,
        completed: true,
        failed: false,
      },
      {
        title: "Client Follow-up",
        description: "Follow up with clients on pending invoices.",
        date: "2025-01-17",
        category: "Communication",
        active: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Bug Fixing",
        description: "Resolve reported issues in the login module.",
        date: "2025-01-14",
        category: "Development",
        active: true,
        completed: false,
        failed: false,
      },
      {
        title: "Code Review",
        description: "Review code for the new feature update.",
        date: "2025-01-15",
        category: "Development",
        active: false,
        completed: true,
        failed: false,
      },
      {
        title: "Documentation Update",
        description: "Update the user guide with new features.",
        date: "2025-01-18",
        category: "Documentation",
        active: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Mockups",
        description: "Create UI mockups for the new dashboard.",
        date: "2025-01-13",
        category: "Design",
        active: true,
        completed: false,
        failed: false,
      },
      {
        title: "Client Presentation",
        description: "Present project updates to the client.",
        date: "2025-01-14",
        category: "Presentation",
        active: false,
        completed: true,
        failed: false,
      },
      {
        title: "Prototype Testing",
        description: "Test the new app prototype for usability.",
        date: "2025-01-15",
        category: "Testing",
        active: true,
        completed: false,
        failed: false,
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Market Research",
        description: "Analyze competitor strategies.",
        date: "2025-01-12",
        category: "Research",
        active: true,
        completed: false,
        failed: false,
      },
      {
        title: "Product Launch Plan",
        description: "Draft the product launch strategy.",
        date: "2025-01-16",
        category: "Marketing",
        active: true,
        completed: false,
        failed: false,
      },
      {
        title: "Social Media Campaign",
        description: "Plan the next social media campaign.",
        date: "2025-01-17",
        category: "Marketing",
        active: false,
        completed: true,
        failed: false,
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Inventory Check",
        description: "Audit the stock inventory.",
        date: "2025-01-11",
        category: "Logistics",
        active: false,
        completed: true,
        failed: false,
      },
      {
        title: "Supplier Coordination",
        description: "Coordinate with suppliers",
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  console.log(employees, admin);
};
