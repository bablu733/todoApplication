import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
const CreateTaskPopup = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name === 'taskName') {
            setTaskName(value);
        } else {
            setDescription(value);
        }
    };

    const handleSave = (e) => {
        e.preventDefault();

        // Validate that taskName is not blank
        if (!taskName.trim()) {
            setError('Task Name cannot be blank');
            return;
        }

        // Validate that description is not blank
        if (!description.trim()) {
            setError('Description cannot be blank');
            return;
        }

        // Clear any previous error
        setError('');

        // Create and save the task object
        let taskObj = {
            Name: taskName,
            Description: description,
        };
        save(taskObj);
    };

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Create Task</ModalHeader>
            <ModalBody>
                <div className="form-group">
                    <label>Task Name</label>
                    <input
                        type="text"
                        className="form-control"
                        value={taskName}
                        onChange={handleChange}
                        name="taskName"
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        rows="5"
                        className="form-control"
                        value={description}
                        onChange={handleChange}
                        name="description"
                    ></textarea>
                </div>
                {error && <div className="text-danger">{error}</div>}
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleSave}>
                    Create
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    );
};

export default CreateTaskPopup;
