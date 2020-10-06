# Rakieta

Zaimplementuj aplikację do odpalania rakiety. Rakieta znajduje się na platformie. Po kliknięciu przycisku `Launch the rocket!` licznik powinien odliczać od 5 do 0.
Kiedy licznik osiągnie wartość 0 rakieta powinna wystartować.

Przeanalizuj gotowe komponenty:

- `Counter`
- `Rocket`
- `LaunchButton`

Następnie zaimplementuj odpowiedni reducer oraz akcje w plikach `redux/reducer` oraz `redux/actions`.

Przykładowy stan początkowy aplikacji:`

```json
{ launched: false, counter: 5 }
```
