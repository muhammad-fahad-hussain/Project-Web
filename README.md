# Doctors Hospital - React Application

A modern hospital management system built with React.js and Bootstrap.

## Features

- **Patient Portal**: Appointment booking, profile management, medical reports
- **Doctor Portal**: Patient management, appointment scheduling, medical records
- **Admin Dashboard**: Complete hospital management system
- **Responsive Design**: Mobile-friendly interface
- **Authentication**: Secure login system for different user types

## Tech Stack

- **Frontend**: React.js, React Bootstrap, React Router
- **Styling**: Bootstrap 5, Custom CSS
- **State Management**: React Context API
- **Backend**: PHP APIs (separate)
- **Database**: MySQL

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js
│   ├── Footer.js
│   ├── AppointmentModal.js
│   └── LoadingSpinner.js
├── pages/              # Page components
│   ├── Home.js
│   ├── About.js
│   ├── Doctors.js
│   ├── Departments.js
│   ├── Contact.js
│   ├── SignIn.js
│   ├── AdminDashboard.js
│   ├── PatientPortal.js
│   └── DoctorPortal.js
├── services/           # API service layer
│   └── api.js
├── context/            # React Context
│   └── AuthContext.js
├── styles/             # CSS files
│   └── global.css
├── utils/              # Helper functions
│   └── helpers.js
└── App.js              # Main application
```

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App

## User Types

1. **Patients**: Book appointments, view medical records
2. **Doctors**: Manage patients, view schedules
3. **Admin**: Complete system management
4. **Receptionist**: Handle appointments and patient registration

## API Integration

The application uses a service layer (`src/services/api.js`) for backend communication. Update the `API_BASE_URL` to match your PHP backend.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## License

This project is licensed under the MIT License.