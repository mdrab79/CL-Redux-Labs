# Zadanie 1. z wykładowcą

Stwórz aplikację React, w której znajduje się następujący routing:
- `/` - ścieżka główna, z powitaniem `<h1>Witaj na stronie!</h1>`;
- `/hello/:name` - ścieżka renderuje komponent `HelloYou`, w którym jest `h1` z napisem "Witaj, {name}", gdzie `{name}` to imię wpisane w ścieżkię;
- `/checkage/:age` - ścieżka renderuje komponent `CheckAge`, w którym jest `h1` z napisem "Pełnoletni", jeżeli w `age` podano wiek min. 18, w przeciwnym wypadku renderuje napis "Niepełnoletni".

Na każdej podstronie wyświetl menu, 3 przykładowe ścieżeki (`/`, `/hello/Jan`, `/checkage/50`). Zaznaczone linki mają być pogrubione `font-weight: bold`

# Zadanie 2.

Stwórz aplikację React, w której znajduje się następujący routing:
- `/` - ścieżka główna, ma wyświetlać listę wszystkich linków services, dokładnie: `/services/www`, `/services/shop`, `/services/seo`;
- `/services/:service` - ścieżka renderuje komponent `ServiceInfo`, w którym jest `h1` z napisem "Proponujemy usługę: {service}", gdzie `{service}` to nazwa tego co poda się w parametrze URL. Poprawne parametry `service` to: `www`, `shop` lub `seo`. Jeżeli wpisano coś innego - wyświetl tylko link do strony głównej w postaci `Powrót do strony głównej`;
- Jeżeli ktoś poda nieprawidłową ścieżkę, to również wyświetla się link do strony głównej `Powrót do strony głównej`.

Wyrenderuj i przetestuj swoją aplikację, sprawdź ścieżki. Sprawdź również co się stanie gdy podasz nieprawidłowy odnośnik (wpisanie `/brak` lub `/services/niepoprawny` powinno skutkować wyświetleniem linku do strony głównej).
