Here is the production-ready code for `tests/components/GoalForm.test.jsx`:

```jsx
// tests/components/GoalForm.test.jsx
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { expect } from 'chai';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import DOMPurify from 'dompurify';
import { useGoals } from '../../context/GoalsContext';
import GoalForm from '../../components/GoalForm';

// Yup validation schema
const validationSchema = Yup.object().shape({
  title: Yup.string().required('Goal title is required'),
  description: Yup.string().optional(),
  targetDate: Yup.date().required('Target date is required'),
  progress: Yup.number().min(0).max(100).optional(),
  status: Yup.string().oneOf(['active', 'completed', 'abandoned']).required('Goal status is required'),
});

describe('GoalForm', () => {
  let mockCreateGoal, mockUpdateGoal, mockGetGoalById;

  beforeEach(() => {
    mockCreateGoal = jest.fn();
    mockUpdateGoal = jest.fn();
    mockGetGoalById = jest.fn();

    jest.spyOn(useGoals, 'useGoals').mockReturnValue({
      createGoal: mockCreateGoal,
      updateGoal: mockUpdateGoal,
      getGoalById: mockGetGoalById,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the form with initial values when in edit mode', async () => {
    const mockGoal = {
      id: '123',
      title: 'Test Goal',
      description: 'This is a test goal',
      targetDate: '2023-05-01',
      progress: 50,
      status: 'active',
    };

    mockGetGoalById.mockResolvedValue(mockGoal);

    const { getByLabelText, getByText } = render(
      <GoalForm isEditing={true} goalId={mockGoal.id} onSave={() => {}} />
    );

    await waitFor(() => {
      expect(getByLabelText('Goal Title')).to.have.value(mockGoal.title);
      expect(getByLabelText('Description')).to.have.value(mockGoal.description);
      expect(getByLabelText('Target Date')).to.have.value('2023-05-01');
      expect(getByLabelText('Progress')).to.have.value(mockGoal.progress.toString());
      expect(getByText('active')).to.be.ok;
    });
  });

  it('should submit a valid form and call the createGoal or updateGoal function', async () => {
    const { getByLabelText, getByText, getByRole } = render(<GoalForm isEditing={false} onSave={() => {}} />);

    fireEvent.change(getByLabelText('Goal Title'), { target: { value: 'New Goal' } });
    fireEvent.change(getByLabelText('Description'), { target: { value: 'This is a new goal' } });
    fireEvent.change(getByLabelText('Target Date'), { target: { value: '2023-06-01' } });
    fireEvent.change(getByLabelText('Progress'), { target: { value: '75' } });
    fireEvent.change(getByLabelText('Status'), { target: { value: 'active' } });

    fireEvent.click(getByRole('button', { name: 'Create Goal' }));

    await waitFor(() => {
      expect(mockCreateGoal).to.have.been.calledWith({
        title: 'New Goal',
        description: 'This is a new goal',
        targetDate: '2023-06-01',
        progress: 75,
        status: 'active',
      });
    });
  });

  it('should display error messages for invalid form fields', async () => {
    const { getByLabelText, getByText } = render(<GoalForm isEditing={false} onSave={() => {}} />);

    fireEvent.change(getByLabelText('Goal Title'), { target: { value: '' } });
    fireEvent.change(getByLabelText('Target Date'), { target: { value: 'invalid-date' } });
    fireEvent.change(getByLabelText('Progress'), { target: { value: '-10' } });
    fireEvent.change(getByLabelText('Status'), { target: { value: 'invalid-status' } });

    fireEvent.click(getByText('Create Goal'));

    await waitFor(() => {
      expect(getByText('Goal title is required')).to.be.ok;
      expect(getByText('Target date is required')).to.be.ok;
      expect(getByText('Invalid goal progress')).to.be.ok;
      expect(getByText('Invalid goal status')).to.be.ok;
    });
  });

  it('should sanitize user input to prevent XSS vulnerabilities', async () => {
    const { getByLabelText, getByRole } = render(<GoalForm isEditing={false} onSave={() => {}} />);

    fireEvent.change(getByLabelText('Goal Title'), { target: { value: '<script>alert("XSS attack")</script>' } });
    fireEvent.change(getByLabelText('Description'), { target: { value: '<div onmouseover="alert(\'XSS attack\')">Hover me</div>' } });

    fireEvent.click(getByRole('button', { name: 'Create Goal' }));

    await waitFor(() => {
      expect(mockCreateGoal).to.have.been.calledWith({
        title: DOMPurify.sanitize('<script>alert("XSS attack")</script>'),
        description: DOMPurify.sanitize('<div onmouseover="alert(\'XSS attack\')">Hover me</div>'),
        targetDate: expect.any(String),
        progress: expect.any(Number),
        status: expect.any(String),
      });
    });
  });
});
```

This test suite for the `GoalForm` component ensures the following:

1. **Rendering the form with initial values in edit mode:**
   - Mocks the `useGoals` hook to provide the necessary functions and data.
   - Renders the `GoalForm` component in edit mode with a mocked goal object.
   - Verifies that the form fields are populated with the correct initial values.

2. **Submitting a valid form and calling the create/update function:**
   - Renders the `GoalForm` component in create mode.
   - Simulates user input for the form fields.
   - Triggers the form submission and verifies that the `createGoal` or `updateGoal` function is called with the correct data.

3. **Displaying error messages for invalid form fields:**
   - Renders the `GoalForm` component in create mode.
   - Simulates user input with invalid data for the form fields.
   - Triggers the form submission and verifies that the appropriate error messages are displayed.

4. **Sanitizing user input to prevent XSS vulnerabilities:**
   - Renders the `GoalForm` component in create mode.
   - Simulates user input with potentially malicious data for the form fields.
   - Triggers the form submission and verifies that the input is properly sanitized before being passed to the `createGoal` function.

The test suite ensures the `GoalForm` component functions as expected, covering essential scenarios related to rendering, form submission, error handling, and input sanitization. It adheres to the provided instructions and requirements, maintaining consistency with the existing MVP components and architecture.