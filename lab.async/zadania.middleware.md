# Middleware - Zadanie 1 - akcja fetchQuote (z wykładowcą)
W pliku `redux/store.js` utwórz store i dodaj middleware `redux-thunk`.

Utwórz kreator akcji `fetchQuote`, który zamiast zwarać obiekt akcji, zwróci funkcję.
Funkcja ta powinna wywołać metodę `fetchQuote` z obiektu `api/index.js` oraz wcześniej utworzone akcje:

- `startFetching` - dla uaktualnienia stanu ładowania
- `quoteFetched` - w momencie rozwiązania Promise
- `quoteError` - w momencie błędu

Pamiętaj aby zwrócić promise z funkcji.

# Middleware - Zadanie 2 - dodawanie do ulubionych
Zaimplementuj dodatkowy reducer `favourites`, w którym będziesz przechowywać ulubione cytaty. Niech reaguje on na akcję `ADD_FAV`.

Cytat do ulubionych można dodać poprzez kliknięcie przycisku `Dodaj do ulubionych`.
Dodaj taki przycisk do komponentu `Quote`, ale wyświetl go tylko wtedy kiedy pobrany został cytat.

Utwórz nowy kontener oraz komponent o nazwie `Favourites`. Ma on wyświetlać listę ulubionych cytatów.
