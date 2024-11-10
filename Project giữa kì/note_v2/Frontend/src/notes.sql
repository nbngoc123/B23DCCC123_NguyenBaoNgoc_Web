CREATE TABLE notes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    due_date DATETIME,
    created_at DATETIME,
    title VARCHAR(255),
    content TEXT,
    priority_level INT,
    status BOOLEAN DEFAULT FALSE,
    actual_duration INT,
    rate_prosess FLOAT,
    effort_score VARCHAR(50),
    likelihood_to_complete FLOAT
);
INSERT INTO notes (
    due_date,
    created_at,
    title,
    content,
    priority_level,
    status,
    actual_duration,
    rate_prosess,
    effort_score,
    likelihood_to_complete
) VALUES 
(
    '2023-05-20 14:30:00',
    '2023-05-20 14:30:00',
    'Complete Project Proposal',
    'Draft and finalize the project proposal for the new client.',
    2,
    false,
    0,
    0,
    'Medium',
    0.75
),
(
    '2023-05-21 09:00:00',
    '2023-05-20 18:45:00',
    'Team Meeting',
    'Discuss project timeline and assign tasks to team members.',
    1,
    false,
    0,
    0,
    'Low',
    0.95
);