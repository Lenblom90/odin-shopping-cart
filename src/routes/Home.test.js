import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import Home from './Home'

describe('Home', () => {
    it('includes a heading', () => {
        render(<Home />);
        expect(screen.getByRole('heading')).toBeInTheDocument();
        expect(screen.getByClass);        
    })
});
