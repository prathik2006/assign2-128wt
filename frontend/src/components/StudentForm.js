import React from 'react';

const StudentForm = ({ formData, handleChange, handleSubmit, formTitle }) => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="mb-0">
          <i className={`fas ${formTitle.includes('Add') ? 'fa-user-plus' : 'fa-user-edit'} me-2`}></i>
          {formTitle}
        </h4>
      </div>
      <div className="card-body">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="studentId" className="form-label">Student ID</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-id-card"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="studentId"
                name="studentId"
                value={formData.studentId}
                onChange={handleChange}
                placeholder="Enter student ID"
                required
              />
            </div>
          </div>
          
          <div className="row mb-4">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <div className="input-group">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="Enter first name"
                  required
                  minLength="2"
                />
              </div>
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Enter last name"
                required
                minLength="2"
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="form-label">Email Address</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-envelope"></i>
              </span>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter email address"
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-calendar"></i>
              </span>
              <input
                type="date"
                className="form-control"
                id="dob"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="department" className="form-label">Department</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-building"></i>
              </span>
              <input
                type="text"
                className="form-control"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                placeholder="Enter department name"
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="enrollmentYear" className="form-label">Enrollment Year</label>
            <div className="input-group">
              <span className="input-group-text">
                <i className="fas fa-calendar-alt"></i>
              </span>
              <input
                type="number"
                className="form-control"
                id="enrollmentYear"
                name="enrollmentYear"
                value={formData.enrollmentYear}
                onChange={handleChange}
                min="2000"
                max={currentYear}
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <div className="form-check form-switch">
              <input
                type="checkbox"
                className="form-check-input"
                id="isActive"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="isActive">
                {formData.isActive ? 'Active Student' : 'Inactive Student'}
              </label>
            </div>
          </div>
          
          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-primary">
              <i className="fas fa-save me-2"></i>
              {formTitle.includes('Add') ? 'Add Student' : 'Update Student'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;