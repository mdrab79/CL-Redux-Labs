# 1. Połączenie z reactem (z wykładowcą)
Rozszerzymy teraz poprzednie zadanie z listą artykułów. Zamiast przekazywać store przez props wykorzystamy `<Provider>`.

Stwórz następujące komponenty prezentacyjne:

- `ArticleInput` - input + select z listą użytkowników wraz z przyciskiem do dodania artykułu
- `UsersList` - lista użytkowników wraz z licznikiem artykułów
- `ArticlesList` - lista artykułów
- `Articles` - komponent agregujący `ArticleInput`, `UsersList`, `ArticlesList`
- `UserInput` - komponent, dzięki któremu będziemy mogli dodać nowego użytkownika

Po dodaniu nowego użytkownika ma on się pojawić na liście dropdown.

Potrzebne nam też będą komponenty kontenerowe:

- `Articles`
- `UserInput`

Dodaj akcję `ADD_USER` wraz z action-creatorem. Będziemy ją wyzwalać w momencie dodawania nowego użytkownika.

Pamiętaj o modyfikacji reducera, tak aby reagował na akcję `ADD_USER`.
