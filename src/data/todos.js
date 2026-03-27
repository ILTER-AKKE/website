export const todos = [
  {
    sprint: 'Sprint 1',
    id: 'T01',
    title: 'Project Proposal Preparation',
    description: 'Writing project scope, basic objectives, and a 1-2 paragraph description.',
    responsible: 'All Team',
    priority: 'High',
    dueDate: '31.10.2025',
    status: 'Completed'
  },
  {
    sprint: 'Sprint 1',
    id: 'T02',
    title: 'Website Setup',
    description: 'Creating the GitHub/GitHub Pages site where project reports will be published.',
    responsible: 'Abdullah / Berk',
    priority: 'Medium',
    dueDate: '31.10.2025',
    status: 'Completed'
  },
  {
    sprint: 'Sprint 1',
    id: 'T03',
    title: 'Literature Review',
    description: 'Research on wearable gesture recognition systems and similar military applications.',
    responsible: 'All Team',
    priority: 'Low',
    dueDate: '31.10.2025',
    status: 'Completed'
  },
  {
    sprint: 'Sprint 2',
    id: 'T04',
    title: 'Project Specification Report (D2)',
    description: 'Detailing functional and non-functional requirements.',
    responsible: 'All Team',
    priority: 'High',
    dueDate: '07.11.2025',
    status: 'Completed'
  },
  {
    sprint: 'Sprint 2',
    id: 'T05',
    title: 'Constraints and Ethics Section',
    description: 'Writing economic, environmental, social constraints and ethical responsibilities.',
    responsible: 'All Team',
    priority: 'High',
    dueDate: '07.11.2025',
    status: 'Completed'
  },
  {
    sprint: 'Sprint 2',
    id: 'T06',
    title: 'Backlog Document (D3)',
    description: 'Creating project task list and timeline.',
    responsible: 'Berk',
    priority: 'Medium',
    dueDate: '07.11.2025',
    status: 'Completed'
  },
  {
    sprint: 'Sprint 3',
    id: 'T07',
    title: 'Analysis Report Preparation (D4)',
    description: 'Drawing system models, scenarios, and use case diagrams.',
    responsible: 'Abdullah',
    priority: 'High',
    dueDate: '21.11.2025',
    status: 'Completed'
  },
  {
    sprint: 'Sprint 3',
    id: 'T08',
    title: 'Hardware Component Procurement',
    description: 'ESP32-WROOM-32, Flex sensors, and IMU module procurement.',
    responsible: 'All Team',
    priority: 'High',
    dueDate: '21.11.2025',
    status: 'Completed'
  },
  {
    sprint: 'Sprint 3',
    id: 'T09',
    title: 'Sensor Data Collection Interface',
    description: 'Writing basic code to read Flex and IMU data via ESP32.',
    responsible: 'Ömer / Şevval',
    priority: 'Medium',
    dueDate: '15.01.2026',
    status: 'Completed'
  },
  {
    sprint: 'Sprint 3',
    id: 'T10',
    title: 'Backlog Update (D5)',
    description: 'Revising task list after analysis phase.',
    responsible: 'Abdullah',
    priority: 'Low',
    dueDate: '15.01.2026',
    status: 'Completed'
  },
  {
    sprint: 'Sprint 4',
    id: 'T11',
    title: 'High-Level Design Report (D6)',
    description: 'Architectural design, subsystem decomposition and hardware/software mapping.',
    responsible: 'All Team',
    priority: 'High',
    dueDate: '15.01.2026',
    status: 'Completed'
  },
  {
    sprint: 'Sprint 4',
    id: 'T12',
    title: 'TinyML Model Design',
    description: 'Determining the structure of the model (CNN/RNN) to be used for gesture classification.',
    responsible: 'All Team',
    priority: 'High',
    dueDate: '15.01.2026',
    status: 'Cancelled'
  },
  {
    sprint: 'Sprint 4',
    id: 'T13',
    title: 'Audio and RF Module Integration',
    description: 'Testing audio playback via DFPlayer Mini and data transmission via RF.',
    responsible: 'All Team',
    priority: 'High',
    dueDate: '15.01.2026',
    status: 'Cancelled'
  },
  {
    sprint: 'Sprint 4',
    id: 'T14',
    title: 'Backlog Update (D7)',
    description: 'Planning for implementation phase after design.',
    responsible: 'Berk',
    priority: 'Low',
    dueDate: '15.01.2026',
    status: 'Completed'
  },
  {
    sprint: 'Sprint 5',
    id: 'T15',
    title: 'Prototype Assembly',
    description: 'Physical mounting of sensors and circuit components on the glove.',
    responsible: 'All Team',
    priority: 'High',
    dueDate: '15.01.2026',
    status: 'Cancelled'
  },
  {
    sprint: 'Sprint 5',
    id: 'T16',
    title: 'Final Presentation and Demo (D8)',
    description: 'Live testing of the system and preparation of poster/presentation materials.',
    responsible: 'All Team',
    priority: 'High',
    dueDate: '15.01.2026',
    status: 'Completed'
  },
  {
    sprint: 'Sprint 5',
    id: 'T17',
    title: 'Error Tests and Calibration',
    description: 'Optimizing sensor calibration data for different hand sizes.',
    responsible: 'Ömer / Şevval',
    priority: 'Medium',
    dueDate: '15.01.2026',
    status: 'Cancelled'
  },
  {
    sprint: 'Sprint 6',
    id: 'T18',
    title: 'Glove Assembly & Soldering',
    description: 'Replacing broken flex sensors, re-soldering, and sewing them onto the glove.',
    responsible: 'All Team',
    priority: 'High',
    dueDate: '27.03.2026',
    status: 'In Progress'
  },
  {
    sprint: 'Sprint 6',
    id: 'T19',
    title: 'Low-Level Design Report (D1 & D3)',
    description: 'Detailing hardware-software mapping, interface contracts, and state behaviors.',
    responsible: 'All Team',
    priority: 'High',
    dueDate: '20.03.2026',
    status: 'Completed'
  },
  {
    sprint: 'Sprint 6',
    id: 'T20',
    title: 'Backlog Document Update (D2)',
    description: 'Creating CMPE 492 task list and timeline.',
    responsible: 'Abdullah',
    priority: 'Medium',
    dueDate: '20.03.2026',
    status: 'Completed'
  },
  {
    sprint: 'Sprint 6',
    id: 'T21',
    title: 'Sensor Data Acquisition (Flex & IMU)',
    description: 'Finalizing C++ code for reading data at 200Hz. Added hardware fault detection (0/4095 limits).',
    responsible: 'Abdullah / Berk',
    priority: 'High',
    dueDate: '27.03.2026',
    status: 'Completed'
  },
  {
    sprint: 'Sprint 7',
    id: 'T22',
    title: 'Low-Level Design Update (D4)',
    description: 'Revising the LLD based on supervisor feedback.',
    responsible: 'All Team',
    priority: 'High',
    dueDate: '27.03.2026',
    status: 'Completed'
  },
  {
    sprint: 'Sprint 7',
    id: 'T23',
    title: 'Gesture Data Collection',
    description: 'Streaming sensor data (Timestamp, 5 Flex, 6 IMU) via Serial to collect the gesture dataset.',
    responsible: 'All Team',
    priority: 'High',
    dueDate: '15.04.2026',
    status: 'In Progress'
  },
  {
    sprint: 'Sprint 7',
    id: 'T24',
    title: 'TinyML Model Training',
    description: 'Developing and training the gesture classification model using the collected dataset.',
    responsible: 'Abdullah / Berk',
    priority: 'High',
    dueDate: '15.04.2026',
    status: 'Pending'
  },
  {
    sprint: 'Sprint 7',
    id: 'T25',
    title: 'Test Plan Report (D5)',
    description: 'Identifying testing strategies (unit, system, integration) for the AKKE system.',
    responsible: 'All Team',
    priority: 'High',
    dueDate: '10.04.2026',
    status: 'Pending'
  },
  {
    sprint: 'Sprint 8',
    id: 'T26',
    title: 'ESP-NOW Protocol Integration',
    description: 'Implementing the digital trigger communication between the glove and the receiver unit.',
    responsible: 'Şevval',
    priority: 'High',
    dueDate: '30.04.2026',
    status: 'In Progress'
  },
  {
    sprint: 'Sprint 8',
    id: 'T27',
    title: 'Audio Module & Potentiometer Setup',
    description: 'Interfacing DFPlayer via UART and implementing volume control on the receiver.',
    responsible: 'Şevval',
    priority: 'High',
    dueDate: '30.04.2026',
    status: 'Pending'
  },
  {
    sprint: 'Sprint 8',
    id: 'T28',
    title: 'End-to-End System Testing',
    description: 'Executing test cases defined in the Test Plan (Latency, accuracy, noise).',
    responsible: 'All Team',
    priority: 'High',
    dueDate: '05.05.2026',
    status: 'Pending'
  },
  {
    sprint: 'Sprint 8',
    id: 'T29',
    title: 'Receiver Battery Management & LED',
    description: 'Implementing voltage divider for 9V battery and RGB LED feedback for successful packet / low battery warnings.',
    responsible: 'Şevval',
    priority: 'High',
    dueDate: '30.04.2026',
    status: 'Pending'
  },
  {
    sprint: 'Sprint 9',
    id: 'T30',
    title: 'Final Report Preparation (D7)',
    description: 'Documenting final architecture, engineering impact, and test results.',
    responsible: 'All Team',
    priority: 'High',
    dueDate: '15.05.2026',
    status: 'Pending'
  },
  {
    sprint: 'Sprint 9',
    id: 'T31',
    title: 'Presentation & Demo Video (D8)',
    description: 'Recording the 25-minute system demonstration and presentation.',
    responsible: 'All Team',
    priority: 'High',
    dueDate: '15.05.2026',
    status: 'Pending'
  },
  {
    sprint: 'Sprint 9',
    id: 'T32',
    title: 'Poster Preparation for Exhibition',
    description: 'Designing the poster for the Young Minds New Ideas competition.',
    responsible: 'All Team',
    priority: 'Medium',
    dueDate: '15.05.2026',
    status: 'Pending'
  }
]

export const getTodosBySprint = (sprint) => {
  return todos.filter(todo => todo.sprint === sprint)
}

export const getTodosByStatus = (status) => {
  return todos.filter(todo => todo.status === status)
}

export const getTodosByPriority = (priority) => {
  return todos.filter(todo => todo.priority === priority)
}

export const getUniqueSprints = () => {
  return [...new Set(todos.map(todo => todo.sprint))]
}

