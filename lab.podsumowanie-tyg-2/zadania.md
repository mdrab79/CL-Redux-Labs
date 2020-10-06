# Stoper
Zaimplementuj aplikację stopera. Ma ona wyświetlać dwa przyciski `start` oraz `stop`. Odpowiednio startujące i zatrzymujące licznik po kliknięciu.
Przyciski te powinny być na zmianę wyłączone tj.:

- jeśli licznik nie jest włączony to przycisk `stop` jest disabled,
- jeśli licznik jest włączony to przycisk `start` jest disabled.

W znaczniku `<h1>` wyświetl aktualną wartość licznika.

Po wystartowaniu licznik ma zwiększać się co sekundę, a jego wartość powinna być trzymana w stanie aplikacji.

Na dole aplikacji wyrenderuj przycisk `zapis`. Po kliknięciu na niego powinniśmy dodać do listy wyników aktualną wartość licznika.

Przykładowy stan aplikacji:

```json
{
  isCounting: false,
  value: 0
}
```

Docelowy html aplikacji:

```html
<div>
    <div>
        <div>
            <button>start</button>
            <button disabled>stop</button>
            <h1>4</h1>
        </div>
    <div>
    <button>zapisz</button>
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
</div>
```

W pliku `redux/actions.js` zaimplementuj asynchroniczną akcję `startCounter` z wykorzystaniem podejścia z `redux-thunk`.

Dodatkowo po kliknięciu w element listy, ma on zostać z niej usunięty.

Przykład działania aplikacji znajdziesz w pliku `app.gif`.

# Zadanie rozszerzające
Spróbuj zainicjować wartość licznika poprzez podanie parametru w ścieżce url. Zaimplementuj prosty router z jedną ścieżką `/` przyjmującą opcjonalny parametr.

Podpowiedź: komponent `Route` może przyjmować prop `render`. Sprawdź w dokumentacji jak go użyć.
