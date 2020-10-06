# 1. Zliczanie artykułów
Stwórz aplikację do zliczania artykułów. Powinna ona umożliwiać dodanie artykułu poprzez wpisanie jego tytułu w prosty input.
Każdy artykuł może mieć jednego z dwóch autorów:
- jan
- gosia

Po kliknięciu przycisku "Dodaj artykuł" powinien on pojawić się na liście artykułów. 
Dodatkowo aplikacja powinna pokazywać listę użytkowników (jan, gosia) wraz z licznikami, które wskazują na liczbę napisanych artykułów.

Utwórz odpowiednią akcję wraz z action-creator dla dodania artykułu w pliku `redux/actions`.
Akcja w swoim `payload` powinna nieść informacje na temat tytułu oraz id użytkownika `{ title, userId }`. Obiekt ten powinien być przekazany jako parametr np. `addArticle({ userId: "jan", title: "Tytuł" })`.

Następnie w pliku `redux/reducer` zaimplementuj reducer, który będzie się składał z dwóch pól:
1. `users` - przechowuje listę użytkowników w ramach obiektu. Stan początkowy powinien ustawić liczbę artykułów na `0`.
```js
// Przykładowy initialState dla reducera users
{
  jan: 0,
  gosia: 0
};
```
2. `articles` - przechowuje tablicę artykułów (lista tytułów)

Każdy z powyższych reducerów powinien korzystać z jednej, wcześniej stworzonej akcji `ADD_ARTICLE`.

Aplikację zaimplementuj w pliku `components/Articles`. Komponent powinien stworzyć store, zapisać się na zmiany i przekazać w głąb (do swoich dzieci odpowiednie pola/metody).

Powinien on renderować 3 komponenty:
1. `ArticleInput`, który powinien przyjmować metodę `onArticleAdd`. Renderuje: `input`, `select` oraz `button`
1. `UsersList` - który powinien przyjmować pole `users`, z listą użytkowników
1. `ArticlesList` - który powinien przyjmować pole `articles` z listą artykułów

Do zapewnienia poprawności pól skorzystaj z `prop-types`.

Pamiętaj aby wpisać się z nasłuchiwania na zmiany w store w momencie kiedy komponent nie będzie już potrzebny. Skorzystaj z jednej z metod cyklu życia komponentu.

Podpowiedź: skorzystaj z metody `Object.entries` do wyrenderowania obiektu użytkowników w formie listy.

# 2. HOC - withTimer
W pliku `withTimer.js` stwórz HOC i nazwij go `withTimer`. Powinien on udostępniać następujące funkcjonalości:

- funkcję `startTimer`, która wystartuje licznik, zliczający co sekundę
- funkcję `stopTimer`, która zatrzyma licznik

Oprócz wyżej wymienionych funkcji, HOC powinien wstrzykiwać do komponentu docelowego pole `counter`, które przechowywać będzie wartość licznika.
Początkowa wartość licznika powinna być ustawiona na `0`.

Następnie w pliku `components/Stopper` zaimplementuj komponent wyświetlający:

- przycisk start - startujący licznik
- przycisk stop - zatrzymujący licznik
- `<p>` w którym wyświetlisz aktualną wartość licznika
- komponent powinien też wyświetlać to, co zostanie przekazane do niego jako `children`. Niech wyświetla tą zawartość zaraz poniżej znacznika `<p>` z wartością licznika.

Wyeksportuj oba komponenty `Stopper` i `StopperWithTimer`.

