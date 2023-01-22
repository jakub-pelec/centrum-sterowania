import styled from 'styled-components';

export const FormWrapper = styled.div`
	display: flex;
	height: 100vh;
	width: 100vw;
	justify-content: center;
	align-items: center;
	gap: 10px;
	flex-direction: column;
	background-color: ${({ theme }) => theme.primary};
`;
