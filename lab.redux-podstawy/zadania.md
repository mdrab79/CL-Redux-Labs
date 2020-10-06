# 1. Własny store (z wykładowcą)
Na bazie redux API zaimplementuj własną wersję store. Store powinien implementować następujące metody z API redux:

- `getState`
- `subscribe`
- `dispatch`

# 2. Licznik
W pliku `counter.js` zaimplementuj aplikację typu "licznik" bazującą na reduxie.
Aplikacja powinna utworzyć nowy store za pomocą zaimplementowanej funkcji z wykładowcą (zad.1).
Następnie za pomocą metody `subscribe` należy zapisać się na zmiany w store. Podczas każdej zmiany w store należy "wyrzucić" na konsolę odpowiedni tekst:

`from subsribe {COUNTER_VALUE}`

Stan aplikacji powinien przechowywać liczbę. Na początku niech będzie to `0`.

Aby zmienić stan należy zaimplementować dwie akcje:

- `INCREMENT` - zwiększającą licznik o podaną wartość
- `DECREMENT` - zmniejszającą licznik o podaną wartość

W pliku `redux/counterActions` zaimplementuj akcje wraz z kreatorami akcji. Pamiętaj o exporcie.

Reducer do aplikacji zaimplementuj w pliku `redux/counterReducer`.

Aplikacja counter powinna:
1. stworzyć nowy store
1. zapisać się na zmiany, każda zmiana loguje na konsole "from subsribe {VALUE}"
1. odpalić akcję `increment(5)` zwiększającą licznik o 5
1. odpalić akcję `decrement(2)` zmniejszającą licznik o 2
1. wypisać się ze zmian
1. odpalić akcję `decrement(2)`
1. sprawdzić poprzez prosty `console.log(store.getState())` czy wartość stanu uległa zmianie.

Wynikiem aplikacji powinnien być następujący zapis z konsoli:
```
from subscribe 5
from subscribe 3
1
```

## Zamiana własnego store na store z reduxa
Po implementacji zadania spróbuj zmienić funkcję tworzącą store na tą z biblioteki `redux`. Czy widać różnicę?

# 3. Aplikacja do zarządzania kontem w banku
W pliku `bankApp` znajduje się szkielet aplikacji. Twoim zadaniem jest połączenie aplikacji z reduxem.

Celem aplikacji jest wyświetlanie stanu konta. Udostępnia ona pole do wpisania kwoty i dwa przyciski do wpłaty i wypłaty środków.

Stwórz store, który będzie przechowywał dane o saldzie konta. Powinien on także reagować na dwie akcje:
1. `WITHDRAW` - wypłać pieniądze
1. `DEPOSIT` - wpłać pieniądze
Każda akcja powinna mieć swój action-creator (`withdrawMoney` oraz `depositMoney`).

Reducer zaimplementuj w pliku `redux/bankReducer`, akcje natomiast w pliku `redux/bankActions`.

Odpowiednio zabezpiecz konto przed ujemnym saldem :)

# 4. Połączenie reducerów
W pliku `redux/combinedReducer.js` utwórz reducer, który będzie połączeniem dwóch reducerów z poprzednich zadań.
Licznik trzymaj pod polem `counter`, a saldo bankowe pod polem `saldo`. Użyj funkcji `combineReducers` z pakietu `redux`.

