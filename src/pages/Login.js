import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaCalendarAlt, FaUsers, FaPaperPlane } from 'react-icons/fa';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    slots: '1',
    date: '',
    message: ''
  });

  const [submissions, setSubmissions] = useState([]);
  const [showSubmissions, setShowSubmissions] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newSubmission = {
      ...formData,
      id: Date.now(),
      submittedAt: new Date().toLocaleString()
    };
    
    setSubmissions([...submissions, newSubmission]);
    
    // Reset form
    setFormData({
      email: '',
      phone: '',
      slots: '1',
      date: '',
      message: ''
    });
    
    alert('Booking submitted successfully!');
  };

  return (
    <div className="login">
      <section className="login-section">
        <div className="container">
          <motion.div 
            className="login-container"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="login-header">
              <h2>Book Your Visit</h2>
              <p>Reserve your spot to experience our magnificent car collection</p>
            </div>

            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">
                  <FaEnvelope className="form-icon" />
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">
                  <FaPhone className="form-icon" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="slots">
                  <FaUsers className="form-icon" />
                  Number of Slots
                </label>
                <select
                  id="slots"
                  name="slots"
                  value={formData.slots}
                  onChange={handleChange}
                  required
                >
                  <option value="1">1 Person</option>
                  <option value="2">2 People</option>
                  <option value="3">3 People</option>
                  <option value="4">4 People</option>
                  <option value="5">5 People</option>
                  <option value="6">6 People</option>
                  <option value="7">7 People</option>
                  <option value="8">8 People</option>
                  <option value="9">9 People</option>
                  <option value="10">10+ People</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="date">
                  <FaCalendarAlt className="form-icon" />
                  Preferred Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">
                  Additional Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Any special requests or additional information..."
                  rows="4"
                />
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPaperPlane className="btn-icon" />
                Submit Booking
              </motion.button>
            </form>

            {/* Toggle to show submissions */}
            <div className="submissions-toggle">
              <button 
                onClick={() => setShowSubmissions(!showSubmissions)}
                className="toggle-btn"
              >
                {showSubmissions ? 'Hide' : 'Show'} Submissions ({submissions.length})
              </button>
            </div>

            {/* Display submissions */}
            {showSubmissions && (
              <motion.div 
                className="submissions-list"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
              >
                <h3>Booking Submissions</h3>
                {submissions.length === 0 ? (
                  <p>No submissions yet.</p>
                ) : (
                  <div className="submissions-grid">
                    {submissions.map((submission) => (
                      <div key={submission.id} className="submission-card">
                        <div className="submission-header">
                          <strong>Booking #{submission.id}</strong>
                          <span className="submission-date">{submission.submittedAt}</span>
                        </div>
                        <div className="submission-details">
                          <p><strong>Email:</strong> {submission.email}</p>
                          <p><strong>Phone:</strong> {submission.phone}</p>
                          <p><strong>Slots:</strong> {submission.slots} {submission.slots === '1' ? 'person' : 'people'}</p>
                          <p><strong>Date:</strong> {submission.date}</p>
                          {submission.message && (
                            <p><strong>Message:</strong> {submission.message}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Login;
