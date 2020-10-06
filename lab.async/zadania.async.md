# Async actions - Zadanie 1 - redcuer i akcje
Przygotuj grunt pod zadanie z wykładowcą :) Zadanie będzie polegało na pobieraniu cytatów z serwera. Twoim zadaniem jest przygotowanie reducrea oraz akcji.

Reducer ma przyjąć następujący stan początkowy:

```json
{
  loading: false,
  error: "",
  quote: null
}
```

Pole `quote` może przyjmować wartość `null` bądź obiekt:

```json
{
 quote: "Chyba walnęliśmy jakiegoś jeża...",
 author: "Grucha"
}
```

Reducer powinien reagaować na akcje:
 
- `QUOTE_FETCHING`, odpalana w momencie kiedy zaczynamy pobieranie cytatu
- `QUOTE_FETCHED`, odpalana w momencie kiedy cytat zostanie pobrany z serwera
- `QUOTE_ERROR`, odpalana w momencie kiedy nastąpi błąd w komunikacji z serwerem

Każda z tych akcji powinna mieć action-creatora, który przekaże odpowiednie dane w polu `payload`:

- dla pomyślnego pobrania będzie to cytat `quote`,
- dla błędu będzie to `error`

Lista action-creators:

- `startFetching`
- `quoteFetched`
- `quoteError`

Pamiętaj, że błąd także powinien ustawić flagę `loading` na false.

Wyeksportuj stworzony reducer pod polem `quote` w funkcji `combineReducers`.

# Async actions - Zadanie 2 - komponenty
W pliku `components/Quote` zaimplementuj komponent prezentacyjny.

Powinien on renderować:

- `<button>Pobierz cytat</button>`, który zawoła metodę `fetchQuote` przekazaną w props. Przycisk ten powinien być wyłączony `disabled` w momencie ładowania cytatu (loading === true).
- `<p>`, w którym wyświetli się pobrany cytat `quote` z props
- `Ładuję cytat...` - jeśli ładowany jest cytat
- treść błędu, jeśli taki wystąpi pod polem `error`

W pliku `containers/Quote` zaimplementuj odpowiednio komponent kontenerowy, mapujący stan na obiekt props.

