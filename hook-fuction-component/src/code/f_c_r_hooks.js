import React, { useState } from 'react';

const StudentList = () => {
  const [students, setStudents] = useState([]);
  // state lưu giá trị input của sinh viên mới
  const [newStudent, setNewStudent] = useState('');

  // xử lý thêm sinh viên
  const handleAddStudent = () => {
    if (newStudent.trim()) {
      setStudents([...students, newStudent.trim()]); // thêm sinh viên vào danh sách
      setNewStudent(''); // reset input sau khi thêm sinh viên 
    }
  };

  // Xử lý khi nhấn phím Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddStudent();
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', fontFamily: 'Arial' }}>
      <h2>Danh sách sinh viên</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
      <div style={{ marginTop: '20px' }}>
      <input
        type="text"
        placeholder="Nhập tên sinh viên"
        value={newStudent}
        onChange={(e) => setNewStudent(e.target.value)}
        onKeyDown={(e) => {
            if (e.key === 'Enter') {
            handleAddStudent();
            }
        }}
      />
        <button
          onClick={handleAddStudent}
          style={{
            padding: '10px 20px',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Thêm sinh viên
        </button>
      </div>
    </div>
  );
};

export default StudentList;
