// src/components/__tests__/ReservationForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ReservationForm from '../reservationForm';

describe('ReservationForm', () => {
  test('renders correctly', () => {
    render(<ReservationForm />);
    expect(screen.getByText('Reserva una Mesa')).toBeInTheDocument();
    expect(screen.getByLabelText('Nombre')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Fecha')).toBeInTheDocument();
    expect(screen.getByLabelText('Hora')).toBeInTheDocument();
    expect(screen.getByLabelText('Número de Invitados')).toBeInTheDocument();
  });

  test('handles form submission', () => {
    render(<ReservationForm />);
    
    const nameInput = screen.getByLabelText('Nombre');
    const emailInput = screen.getByLabelText('Email');
    const dateInput = screen.getByLabelText('Fecha');
    const timeInput = screen.getByLabelText('Hora');
    const guestsInput = screen.getByLabelText('Número de Invitados');
    const submitButton = screen.getByRole('button', { name: /Reservar/i });

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(dateInput, { target: { value: '2023-12-31' } });
    fireEvent.change(timeInput, { target: { value: '19:00' } });
    fireEvent.change(guestsInput, { target: { value: '4' } });

    fireEvent.click(submitButton);

    expect(console.log).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      date: '2023-12-31',
      time: '19:00',
      guests: '4',
    });
  });
});

// Mock console.log to test form submission
beforeEach(() => {
  jest.spyOn(console, 'log').mockImplementation(() => {});
});

afterEach(() => {
  console.log.mockRestore();
});
