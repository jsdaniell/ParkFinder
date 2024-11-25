"use client";
import Button from "@/components/Button/Button";
import InputWithLabel from "@/components/InputWithLabel/InputWithLabel";
import { URL_API } from "@/utils/constants/serviceConstants";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  function login() {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "email": email,
      "password": password
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(URL_API + "auth/login", requestOptions)
      .then(async (response) => {
        const result = await response.json();
        
        localStorage.setItem("user", JSON.stringify(result));
        return router.push("/dashboard");
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user && JSON.parse(user)) {
      router.push("/dashboard");
    }
  }, []);


  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Entre na sua conta
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6">
          <InputWithLabel
            label="Email"
            id="email"
            name="email"
            type="email"
            onChange={e => setEmail(e.target.value)}
            required
            autoComplete="email"
          />
          <InputWithLabel
            label="Senha"
            id="password"
            name="password"
            type="password"
            onChange={e => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
          <Button onClick={login}>
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}
