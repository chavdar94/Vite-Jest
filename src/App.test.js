import { render, screen } from '@testing-library/react';
import App from './App';
import sum from './utlis/sum';

describe('App', () => {
	test('App renders correctly', () => {
		render(<App />);

		expect(screen.getByText('Testing works')).toBeInTheDocument();
	});
});

describe('Sum', () => {
	test('Should return 0 for empty array', () => {
		expect(sum()).toBe(0);
	});

	test('Should return 1 for [1]', () => {
		expect(sum(1)).toBe(1);
	});

	test('Should return 3 for [1, 2]', () => {
		expect(sum(1, 2)).toBe(3);
	});
});
