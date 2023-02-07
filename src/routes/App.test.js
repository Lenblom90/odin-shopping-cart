import React from 'react';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import NavBar from '../components/Navbar';
import { Outlet } from 'react-router-dom'

describe('App', () => {
    it('renders Outlet component', () => {
        render(<Outlet />);
    })
});
