const employees = [
    {
      "id": 1,
      "email": "employee1@example.com",
      "password": "1234",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Complete the report.",
          "date": "2024-12-19",
          "category": "Documentation",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Update project roadmap.",
          "date": "2024-12-20",
          "category": "Planning",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Fix bugs in the codebase.",
          "date": "2024-12-21",
          "category": "Development",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 2,
      "email": "employee2@example.com",
      "password": "1234",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Review team performance.",
          "date": "2024-12-19",
          "category": "Management",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Schedule client meeting.",
          "date": "2024-12-20",
          "category": "Communication",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Update the database schema.",
          "date": "2024-12-21",
          "category": "Development",
          "active": false,
          "newTask": false,
          "completed": false,
          "failed": true
        }
      ]
    },
    {
      "id": 3,
      "email": "employee3@example.com",
      "password": "1234",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Prepare presentation slides.",
          "date": "2024-12-19",
          "category": "Presentation",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Organize team meeting.",
          "date": "2024-12-20",
          "category": "Teamwork",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Update the website content.",
          "date": "2024-12-21",
          "category": "Content",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 4,
      "email": "employee4@example.com",
      "password": "1234",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Research new tools.",
          "date": "2024-12-19",
          "category": "Research",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Clean up old code.",
          "date": "2024-12-20",
          "category": "Maintenance",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Write documentation.",
          "date": "2024-12-21",
          "category": "Documentation",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    },
    {
      "id": 5,
      "email": "employee5@example.com",
      "password": "1234",
      "tasks": [
        {
          "title": "Task 1",
          "description": "Analyze sales data.",
          "date": "2024-12-19",
          "category": "Analytics",
          "active": false,
          "newTask": false,
          "completed": true,
          "failed": false
        },
        {
          "title": "Task 2",
          "description": "Test the new feature.",
          "date": "2024-12-20",
          "category": "Testing",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        },
        {
          "title": "Task 3",
          "description": "Plan the quarterly review.",
          "date": "2024-12-21",
          "category": "Planning",
          "active": true,
          "newTask": true,
          "completed": false,
          "failed": false
        }
      ]
    }
  ];
  
  const admins = [
    {
      "id": 1,
      "email": "admin@example.com",
      "password": "1234"
    }
  ];

export const setLocalStorage=()=>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admins',JSON.stringify(admins))
}
export const getLocalStorage=()=>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admins = JSON.parse(localStorage.getItem('admins'))

    return{employees,admins}
}