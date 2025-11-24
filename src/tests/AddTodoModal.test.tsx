import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import AddTodoModal from '../components/AddTodoModal';

describe('AddTodoModal Component', () => {
  const mockOnClose = vi.fn();
  const mockOnAdd = vi.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
    mockOnAdd.mockClear();
  });

  it('renders the modal heading', () => {
    render(<AddTodoModal onClose={mockOnClose} onAdd={mockOnAdd} />);
    expect(screen.getByText(/add todo/i)).toBeInTheDocument();
  });

  it('updates input field value when typing', async () => {
    render(<AddTodoModal onClose={mockOnClose} onAdd={mockOnAdd} />);
    const input = screen.getByPlaceholderText(/todo title/i) as HTMLInputElement;
    await userEvent.type(input, 'Test Todo');
    expect(input.value).toBe('Test Todo');
  });

  it('calls onAdd and onClose when Add button is clicked with valid input', async () => {
    render(<AddTodoModal onClose={mockOnClose} onAdd={mockOnAdd} />);
    const input = screen.getByPlaceholderText(/todo title/i) as HTMLInputElement;
    const addButton = screen.getByRole('button', { name: /add/i });

    await userEvent.type(input, 'New Todo');
    await userEvent.click(addButton);

    expect(mockOnAdd).toHaveBeenCalledWith({ title: 'New Todo', completed: false });
    expect(mockOnClose).toHaveBeenCalled();
  });

  it('does not call onAdd if input is empty', async () => {
    render(<AddTodoModal onClose={mockOnClose} onAdd={mockOnAdd} />);
    const addButton = screen.getByRole('button', { name: /add/i });
    await userEvent.click(addButton);

    expect(mockOnAdd).not.toHaveBeenCalled();
    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it('calls onClose when Cancel button is clicked', async () => {
    render(<AddTodoModal onClose={mockOnClose} onAdd={mockOnAdd} />);
    const cancelButton = screen.getByRole('button', { name: /cancel/i });
    await userEvent.click(cancelButton);

    expect(mockOnClose).toHaveBeenCalled();
  });
});
