/**
 * Authentication and Storage Utilities
 * Uses localStorage to persist users and session state.
 */

export interface User {
  id: string;
  fullName: string;
  email: string;
  password?: string;
  createdAt: string;
}

const USERS_KEY = 'nexus_users';
const SESSION_KEY = 'nexus_session';

export const AuthService = {
  // Get all users
  getUsers: (): User[] => {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  },

  // Signup
  signup: (fullName: string, email: string, password: string): { success: boolean; message: string } => {
    const users = AuthService.getUsers();
    if (users.some(u => u.email === email)) {
      return { success: false, message: 'Email already registered.' };
    }

    const newUser: User = {
      id: Math.random().toString(36).substring(2, 11),
      fullName,
      email,
      password, // In a real app, this would be hashed
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(USERS_KEY, JSON.stringify([...users, newUser]));
    return { success: true, message: 'Signup successful!' };
  },

  // Login
  login: (email: string, password: string): { success: boolean; message: string; user?: User } => {
    const users = AuthService.getUsers();
    const user = users.find(u => u.email === email && u.password === password);

    if (!user) {
      return { success: false, message: 'Invalid email or password.' };
    }

    // Set session
    const sessionUser = { ...user };
    delete sessionUser.password;
    localStorage.setItem(SESSION_KEY, JSON.stringify(sessionUser));

    return { success: true, message: 'Login successful!', user: sessionUser };
  },

  // Logout
  logout: () => {
    localStorage.removeItem(SESSION_KEY);
  },

  // Get current user from session
  getCurrentUser: (): User | null => {
    const session = localStorage.getItem(SESSION_KEY);
    return session ? JSON.parse(session) : null;
  },

  // Delete user (Admin only)
  deleteUser: (userId: string) => {
    const users = AuthService.getUsers();
    const filtered = users.filter(u => u.id !== userId);
    localStorage.setItem(USERS_KEY, JSON.stringify(filtered));
  },
  
  // Profile Update
  updateProfile: (userId: string, data: Partial<User>): { success: boolean; message: string } => {
    const users = AuthService.getUsers();
    const index = users.findIndex(u => u.id === userId);
    if (index === -1) return { success: false, message: 'User not found.' };

    users[index] = { ...users[index], ...data };
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    // Update session if it's the current user
    const current = AuthService.getCurrentUser();
    if (current && current.id === userId) {
      const updatedSession = { ...current, ...data };
      delete updatedSession.password;
      localStorage.setItem(SESSION_KEY, JSON.stringify(updatedSession));
    }

    return { success: true, message: 'Profile updated!' };
  }
};
