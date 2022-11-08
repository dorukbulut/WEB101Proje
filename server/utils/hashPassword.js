import bcrypt from 'bcrypt'

export const hashPassword = async user_password => {
	const salt = await bcrypt.genSalt(10);
	const hashed_password = await bcrypt.hash(user_password, salt);
	return hashed_password;
};
export const compareHashedPassword = async (user_password, hashed_password) => {
	const validPassword = await bcrypt.compare(user_password, hashed_password);
	return validPassword;
};

export default {hashPassword, compareHashedPassword}