import { fireEvent, render, screen } from '@testing-library/react';
import { Counter } from './Counter';

/* Test cases for reference
 -- default value to be 0
 -- initial value to be passed value
 -- increase value when clicked add
 -- decrease value when clicked remove
 -- no negative value when clicked remove
*/

test('it should have a initial value to be 15', () => {
    render(<Counter initialValue={15} />)
    const count = screen.queryByText(15)
    expect(count).toBeVisible()
});

test('it should have a default initial value of 0', () => {
    render(<Counter />)
    const count = screen.queryByText(0)
    expect(count).toBeVisible()
});

test('it should increase value correctly when clicked add once', () => {
    render(<Counter initialValue={1} />);
    const addButton = screen.getByText("Add")
    fireEvent.click(addButton)
    const count = screen.queryByText(2)
    expect(count).toBeVisible()
});

test('it should increase value correctly when clicked add twice', () => {
    render(<Counter initialValue={1} />)
    const addButton = screen.queryByText('Add')
    fireEvent.click(addButton)
    fireEvent.click(addButton)
    const count = screen.queryByText(3)
    expect(count).toBeVisible()
});

test('it should decrease value correctly when clicked remove once', () => {
    render(<Counter initialValue={5} />)
    const removeButton = screen.queryByText('Remove')
    fireEvent.click(removeButton)
    const count = screen.queryByText(4)
    expect(count).toBeVisible()
});

test('it should decrease value correctly when clicked remove twice', () => {
    render(<Counter initialValue={3} />)
    const removeButton = screen.queryByText('Remove')
    fireEvent.click(removeButton)
    fireEvent.click(removeButton)
    const count = screen.queryByText(1)
    expect(count).toBeVisible()
});

test('it should not allow a negative value when initial value is 0 and remove is clicked', () => {
    render(<Counter initialValue={0} />)
    const removeButton = screen.queryByText('Remove')
    fireEvent.click(removeButton)
    const count = screen.queryByText(0)
    expect(count).toBeVisible()
});

test('it should not allow a negative value when initial value is 2 and remove is clicked four times', () => {
    render(<Counter initialValue={0} />)
    const removeButton = screen.queryByText('Remove')
    fireEvent.click(removeButton)
    fireEvent.click(removeButton)
    fireEvent.click(removeButton)
    fireEvent.click(removeButton)
    const count = screen.queryByText(0)
    expect(count).toBeVisible()
});