// src/context/AuthContext.tsx
import React, { createContext, useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";

type Role = "credor" | "devedor";
type User = { id: string; name: string; email: string; role: Role };

type AuthContextType = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string, role: Role) => Promise<void>;
  logout: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const json = await AsyncStorage.getItem("@agilit_user");
      if (json) setUser(JSON.parse(json));
      setLoading(false);
    })();
  }, []);

  const login = async (email: string, password: string) => {
    // Simulação: procurar usuário salvo localmente por email
    const _users = JSON.parse((await AsyncStorage.getItem("@agilit_users")) || "[]") as User[];
    const found = _users.find(u => u.email === email);
    if (!found) throw new Error("Usuário não encontrado");
    await AsyncStorage.setItem("@agilit_user", JSON.stringify(found));
    setUser(found);
    // redireciona depois que chamar na view
  };

  const signup = async (name: string, email: string, password: string, role: Role) => {
    // Simulação: salva na lista local de usuários
    const id = Date.now().toString();
    const newUser: User = { id, name, email, role };
    const _users = JSON.parse((await AsyncStorage.getItem("@agilit_users")) || "[]") as User[];
    _users.push(newUser);
    await AsyncStorage.setItem("@agilit_users", JSON.stringify(_users));
    await AsyncStorage.setItem("@agilit_user", JSON.stringify(newUser));
    setUser(newUser);
  };

  const logout = async () => {
    await AsyncStorage.removeItem("@agilit_user");
    setUser(null);
    router.push("/(auth)/login");
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
};
