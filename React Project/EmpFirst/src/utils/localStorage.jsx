localStorage.clear()

const employees = [
  {
      "id": 1,
      "firstname": "Ahmed",
      "email": "e@e.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Design Login Page",
              "taskDescription": "Create a login page with email and password fields.",
              "taskDate": "2024-02-01",
              "category": "design"
          },
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Fix Landing Page Bugs",
              "taskDescription": "Resolve issues reported by QA on the landing page.",
              "taskDate": "2024-01-20",
              "category": "development"
          }
      ],
      "taskCounts": {
          "active": 1,
          "newTask": 1,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 2,
      "firstname": "Bilal",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Update Footer",
              "taskDescription": "Update the footer design as per the new guidelines.",
              "taskDate": "2024-02-02",
              "category": "design"
          },
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "Database Migration",
              "taskDescription": "Migrate the current database to a new server.",
              "taskDate": "2024-01-30",
              "category": "development"
          }
      ],
      "taskCounts": {
          "active": 2,
          "newTask": 2,
          "completed": 0,
          "failed": 0
      }
  },
  {
      "id": 3,
      "firstname": "Zain",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": false,
              "completed": false,
              "failed": true,
              "taskTitle": "Optimize Images",
              "taskDescription": "Compress and optimize images for faster load time.",
              "taskDate": "2024-01-15",
              "category": "development"
          }
      ],
      "taskCounts": {
          "active": 1,
          "newTask": 0,
          "completed": 0,
          "failed": 1
      }
  },
  {
      "id": 4,
      "firstname": "Asad",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
          {
              "active": false,
              "newTask": false,
              "completed": true,
              "failed": false,
              "taskTitle": "Backend API Integration",
              "taskDescription": "Integrate the backend API with the frontend.",
              "taskDate": "2024-01-28",
              "category": "development"
          }
      ],
      "taskCounts": {
          "active": 0,
          "newTask": 0,
          "completed": 1,
          "failed": 0
      }
  },
  {
      "id": 5,
      "firstname": "Sara",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
          {
              "active": true,
              "newTask": true,
              "completed": false,
              "failed": false,
              "taskTitle": "UI Testing",
              "taskDescription": "Conduct testing for the new UI components.",
              "taskDate": "2024-01-25",
              "category": "testing"
          }
      ],
      "taskCounts": {
          "active": 1,
          "newTask": 1,
          "completed": 0,
          "failed": 0
      }
  }
];

  
  const admin = {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  };
  
  export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
  }
  
  export const getLocalStorage = () => {
    let employees = JSON.parse(localStorage.getItem('employees'))
    let admin = JSON.parse(localStorage.getItem('admin'))

    if (!employees || !admin) {
      setLocalStorage();
      employees = JSON.parse(localStorage.getItem("employees"));
      admin = JSON.parse(localStorage.getItem("admin"));
    }
  
    return { employees, admin };
  };