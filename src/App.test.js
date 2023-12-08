import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
	test('App renders correctly', () => {
		render(<App />);

		expect(screen.getByText('Testing works')).toBeInTheDocument();
	});
});
