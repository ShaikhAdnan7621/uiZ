'use client'
import { useState } from 'react';
// import Alert from './Component/Alert';
import Badge from '@/Component/Badge';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/Component/Accordion'; // Import all the necessary components

import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '@/Component/Breadcrumb';
import Button from '@/Component/Button';
import Calendar from '@/Component/Calendar';
import Carousel, { CarouselItem } from '@/Component/Carousel';
import Checkbox from '@/Component/Checkbox';
import DilogContener, { DilogMenuContent, DilogMenuList } from '@/Component/Dilog';
import Dropdown, { DropdownItem } from '@/Component/Dropdown';
import Input from '@/Component/Input';
import Label from '@/Component/Label';
import Tooltip from '@/Component/Tooltip';
import { Command, CommandGroup, CommandItem, CommandItemIcon, CommandItemText } from '@/Component/Command';

// Sample task data (replace with actual data fetching/management)
const initialTasks = [
    { id: 1, title: 'Finish project proposal', project: 'Acme Website', dueDate: '2024-03-10', priority: 'high', completed: false },
    { id: 2, title: 'Write blog post', project: 'Marketing', dueDate: '2024-03-15', priority: 'medium', completed: true },
    { id: 3, title: 'Schedule team meeting', project: 'Internal', dueDate: null, priority: 'low', completed: false },
];

export default function page() {
    const [tasks, setTasks] = useState(initialTasks);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('all');
    const [showNewTaskModal, setShowNewTaskModal] = useState(false);

    // Function to handle task completion
    const toggleTaskCompletion = (taskId) => {
        setTasks(tasks.map(task =>
            task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    // Function to handle task search
    const handleSearch = (term) => {
        setSearchTerm(term.toLowerCase());
    };

    // Function to handle filtering tasks by status
    const handleFilterChange = (status) => {
        setFilterStatus(status);
    };

    // Function to handle adding a new task 
    const handleAddTask = (newTask) => {
        console.log(newTask)
        setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
        setShowNewTaskModal(false);
    };

    // Filter tasks based on search term and filter status
    const filteredTasks = tasks.filter(task => {
        const titleMatch = task.title.toLowerCase().includes(searchTerm);
        const statusMatch = filterStatus === 'all' ||
            (filterStatus === 'completed' && task.completed) ||
            (filterStatus === 'incomplete' && !task.completed);
        return titleMatch && statusMatch;
    });

    return (
        <div className="overflow-hidden min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)]">
            <Breadcrumb className="my-4">
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                    <BreadcrumbLink active={true}>Tasks</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>

            <h1 className="text-3xl font-bold text-center mb-4">Task Dashboard</h1>

            {/* Carousel for announcements/tips (replace with actual content) */}
            <Carousel autoplay interval={5000} className="mb-8">
                <CarouselItem>
                    <div className="bg-black flex items-center justify-center p-4 rounded-md h-96">
                        <h3 className="text-lg font-semibold">Welcome to your dashboard!</h3>
                        <p>Stay organized and manage your tasks effectively.</p>
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="bg-black flex items-center justify-center p-4 rounded-md h-96">
                        <h3 className="text-lg font-semibold">Tip: Prioritize your tasks!</h3>
                        <p>Focus on high-priority tasks first to maximize productivity.</p>
                    </div>
                </CarouselItem>
            </Carousel>

            <div className="flex flex-col md:flex-row gap-4">
                {/* Sidebar */}
                <div className="md:w-1/4 bg-black p-4 rounded-md">
                    <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>

                    {/* Add Task Button */}
                    <Button onClick={() => setShowNewTaskModal(true)} variant='outline'>Add Task</Button>

                    <h3 className="text-lg font-semibold mt-6 mb-2">Filter</h3>
                    <Dropdown value={filterStatus} onChange={handleFilterChange} className="w-full">
                        <DropdownItem value="all">All Tasks</DropdownItem>
                        <DropdownItem value="completed">Completed</DropdownItem>
                        <DropdownItem value="incomplete">Incomplete</DropdownItem>
                    </Dropdown>

                    {/* Calendar */}
                    <h3 className="text-lg font-semibold mt-6 mb-2">Calendar</h3>
                    <Calendar
                        position={" bottom-full mb-5  left-1/2 transform -translate-x-1/2"}
                    />
                </div>

                {/* Main Content Area */}
                <div className="md:w-3/4">
                    {/* Command Palette for Search and Actions */}
                    <Command onSearch={handleSearch} placeholder="Search tasks..." className="mb-4">
                        <CommandGroup title="Actions">
                            <CommandItem onClick={() => alert('Add new task')} >
                                <CommandItemIcon>+</CommandItemIcon>
                                <CommandItemText>Add Task</CommandItemText>
                            </CommandItem>
                        </CommandGroup>
                    </Command>

                    {/* Accordions for Task Categories (replace with actual categories) */}
                    <Accordion>
                        <AccordionItem value="project1">
                            <AccordionTrigger>
                                <span>Acme Website Project</span>
                                <Badge variant="blue" style="light" className="ml-2 p-2 ">
                                    {filteredTasks.filter(task => task.project === 'Acme Website').length}
                                </Badge>
                            </AccordionTrigger>
                            <AccordionContent>
                                <TaskList tasks={filteredTasks.filter(task => task.project === 'Acme Website')} onToggleComplete={toggleTaskCompletion} />
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="project2">
                            <AccordionTrigger>
                                <span>Marketing</span>
                                <Badge variant="green" style="light"   className="ml-2 p-2">
                                    {filteredTasks.filter(task => task.project === 'Marketing').length}
                                </Badge>
                            </AccordionTrigger>
                            <AccordionContent>
                                <TaskList tasks={filteredTasks.filter(task => task.project === 'Marketing')} onToggleComplete={toggleTaskCompletion} />
                            </AccordionContent>
                        </AccordionItem>

                        {/* More Accordion Items for other categories */}
                    </Accordion>
                </div>
            </div>

            {/* New Task Modal */}
            {showNewTaskModal && (
                <NewTaskModal onClose={() => setShowNewTaskModal(false)} onAddTask={handleAddTask} />
            )}
        </div>
    );
}

// Component for rendering the task list
const TaskList = ({ tasks, onToggleComplete }) => {
    return (
        <ul className="space-y-2">
            {tasks.map(task => (
                <li key={task.id} className=" p-2 border rounded-md">
                    <DilogContener rightclick={() => console.log(`Menu for task ${task.id} clicked!`)}>
                        <div className='flex items-center justify-between'>

                            <div className="flex items-center">
                                {/* Checkbox for task completion */}
                                <Checkbox
                                    id={`task-${task.id}`}
                                    checked={task.completed}
                                    onChange={() => onToggleComplete(task.id)}
                                />
                                <label htmlFor={`task-${task.id}`} className={`ml-2 ${task.completed ? 'line-through text-gray-500' : ''}`}>
                                    {task.title}
                                </label>
                            </div>

                            <div className="flex items-center gap-2">
                                {/* Due Date (if available) */}
                                {task.dueDate && (
                                    <Tooltip text={`Due: ${task.dueDate}`} position="left" size='sm' className="w-32">
                                        <span className="text-xs text-gray-600">{task.dueDate}</span>
                                    </Tooltip>
                                )}

                                {/* Task Priority Badge */}
                                <Badge variant={task.priority === 'high' ? 'red' : task.priority === 'medium' ? 'yellow' : 'green'}>
                                    {task.priority}
                                </Badge>
                            </div>

                            {/* Task Actions (using DilogContener) */}

                            <Tooltip text={`Right Click to see the Actions`} position="left" size='sm' className="w-32">
                                <button className="px-2 py-1 rounded-md hover:bg-gray-800">
                                    <span aria-hidden="true">...</span> {/* Replace with menu icon */}
                                </button>
                            </Tooltip>
                        </div>
                        <DilogMenuContent className={"transform -translate-x-full -translate-y-1/2 w-20 "}>
                            <DilogMenuList ><div>Edit</div><span>✒️</span></DilogMenuList>
                            <DilogMenuList ><div>Delete</div><span>🗑️</span></DilogMenuList>
                        </DilogMenuContent>
                    </DilogContener>
                </li>
            ))}
        </ul>
    );
};

// Modal component for adding a new task
const NewTaskModal = ({ onClose, onAddTask }) => {
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskProject, setNewTaskProject] = useState('');
    const [newTaskDueDate, setNewTaskDueDate] = useState(null);
    const [newTaskPriority, setNewTaskPriority] = useState('medium');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTask({
            title: newTaskTitle,
            project: newTaskProject,
            dueDate: newTaskDueDate,
            priority: newTaskPriority,
        });
        // Reset form fields
        setNewTaskTitle('');
        setNewTaskProject('');
        setNewTaskDueDate(null);
        setNewTaskPriority('medium');
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Modal backdrop */}

            <div className="bg-black border border-gray-500 p-4 w-96 rounded-md z-10 relative">
                <h2 className="text-xl font-semibold mb-4">Add New Task</h2>

                {/* New Task Form */}

                <div>
                    <Label htmlFor="task-title">Title:</Label>
                    <Input
                        id="task-title"
                        type="text"
                        value={newTaskTitle}
                        className={"w-full"}
                        placeholder={"Title"}
                        onChange={(value) => setNewTaskTitle(value)}
                        required
                    />
                </div>

                <div>
                    <Label htmlFor="task-project">Project:</Label>
                    <Input
                        id="task-project"
                        type="text"
                        value={newTaskProject}
                        className={"w-full"}
                        placeholder={"Project Name"}
                        onChange={(value) => setNewTaskProject(value)}
                    />
                </div>

                <div>
                    <Label htmlFor="task-due-date">Due Date:</Label>
                    <Calendar
                        id="task-due-date"
                        className={"  w-full"}
                        value={newTaskDueDate}
                        onChange={setNewTaskDueDate}
                    />
                </div>

                <div>
                    <Label htmlFor="task-priority">Priority:</Label>
                    <Dropdown value={newTaskPriority} onChange={setNewTaskPriority} id="task-priority">
                        <DropdownItem value="low">Low</DropdownItem>
                        <DropdownItem value="medium">Medium</DropdownItem>
                        <DropdownItem value="high">High</DropdownItem>
                    </Dropdown>
                </div>

                <div className="flex justify-end space-x-4 mt-3">
                    <Button variant="outline" onClick={onClose}>Cancel</Button>
                    <Button type="submit" onClick={handleSubmit} >Add Task</Button>
                </div>
            </div>
        </div>
    );
};