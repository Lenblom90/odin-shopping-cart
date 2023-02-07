import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom'
import Shop from './Shop'

describe('Shop', () => {
    it('includes a heading', () => {
        render(<Shop />);
        expect(screen.getByRole('heading')).toBeInTheDocument();
    });

    it('includes an image', () => {
        render(<Shop />);
        expect(screen.queryAllByRole('img')).toBeTruthy();
    });
});
