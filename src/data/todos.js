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
    description: 'Preparation of High Level Design Documentation.',
    responsible: 'All Team',
    priority: 'High',
    dueDate: '21.11.2025',
    status: 'Completed'
  },
  {
    sprint: 'Sprint 3',
    id: 'T07',
    title: 'Preparation of Diagrams',
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
    description: 'Procurement of ESP32-S3, Flex sensors, IMU and RF modules.',
    responsible: 'All Team',
    priority: 'High',
    dueDate: '21.11.2025',
    status: 'Pending'
  },
  {
    sprint: 'Sprint 3',
    id: 'T09',
    title: 'Sensor Data Collection Interface',
    description: 'Writing basic code to read Flex and IMU data via ESP32.',
    responsible: 'TBD',
    priority: 'Medium',
    dueDate: 'January 2026',
    status: 'Pending'
  },
  {
    sprint: 'Sprint 3',
    id: 'T10',
    title: 'Backlog Update (D5)',
    description: 'Revising task list after analysis phase.',
    responsible: 'TBD',
    priority: 'Low',
    dueDate: 'January 2026',
    status: 'Pending'
  },
  {
    sprint: 'Sprint 4',
    id: 'T11',
    title: 'High-Level Design Report (D6)',
    description: 'Architectural design, subsystem decomposition and hardware/software mapping.',
    responsible: 'TBD',
    priority: 'High',
    dueDate: 'January 2026',
    status: 'Pending'
  },
  {
    sprint: 'Sprint 4',
    id: 'T12',
    title: 'TinyML Model Design',
    description: 'Determining the structure of the model (CNN/RNN) to be used for gesture classification.',
    responsible: 'TBD',
    priority: 'High',
    dueDate: 'January 2026',
    status: 'Pending'
  },
  {
    sprint: 'Sprint 4',
    id: 'T13',
    title: 'Audio and RF Module Integration',
    description: 'Testing audio playback via DFPlayer Mini and data transmission via RF.',
    responsible: 'TBD',
    priority: 'High',
    dueDate: 'January 2026',
    status: 'Pending'
  },
  {
    sprint: 'Sprint 4',
    id: 'T14',
    title: 'Backlog Update (D7)',
    description: 'Planning for implementation phase after design.',
    responsible: 'TBD',
    priority: 'Low',
    dueDate: 'January 2026',
    status: 'Pending'
  },
  {
    sprint: 'Sprint 5',
    id: 'T15',
    title: 'Prototype Assembly',
    description: 'Physical mounting of sensors and circuit components on the glove.',
    responsible: 'TBD',
    priority: 'High',
    dueDate: 'January 2026',
    status: 'Pending'
  },
  {
    sprint: 'Sprint 5',
    id: 'T16',
    title: 'Final Presentation and Demo (D8)',
    description: 'Live testing of the system and preparation of poster/presentation materials.',
    responsible: 'TBD',
    priority: 'High',
    dueDate: 'January 2026',
    status: 'Pending'
  },
  {
    sprint: 'Sprint 5',
    id: 'T17',
    title: 'Error Tests and Calibration',
    description: 'Optimizing sensor calibration data for different hand sizes.',
    responsible: 'TBD',
    priority: 'Medium',
    dueDate: 'January 2026',
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

