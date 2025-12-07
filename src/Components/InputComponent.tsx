'use client';
import { useRouter, useSearchParams } from "next/navigation";
import style from "../styles/search.module.css";
import { useEffect, useState } from "react";

export const InputComponent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Obtener el valor inicial desde la URL si existe
  const initialValue = searchParams.get("searchProduct") || "";
  const [query, setQuery] = useState(initialValue);

  useEffect(() => {
    // Crear un debounce de 300ms
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(window.location.search);

      if (query) {
        params.set("searchProduct", query);
      } else {
        params.delete("searchProduct");
      }

      // Actualizar la URL sin recargar la página
      router.push(`?${params.toString()}`);
    }, 300);

    return () => clearTimeout(timeout);
  }, [query, router]);

  return (
    <div className={style.search}>
        <input
            type="text"
            className={style.search__input}
            placeholder="Escribe el producto que deseas buscar..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
    </div>
  )
}