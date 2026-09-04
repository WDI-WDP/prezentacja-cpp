# Prezentacja – Wprowadzenie do programowania z wykorzystaniem języka C++

Statyczna prezentacja internetowa przeznaczona do publikacji za pomocą GitHub Pages. Nie wymaga instalowania bibliotek ani procesu budowania.

## Sterowanie

- `←` i `→` – przechodzenie między lekcjami;
- `↑` i `↓` – przechodzenie między elementami bieżącej lekcji;
- `M` – spis lekcji;
- `F` – tryb pełnoekranowy;
- `Home` – strona tytułowa;
- `?` – pomoc.

Na urządzeniach dotykowych można korzystać z gestów przesuwania.

## Uruchomienie lokalne

Stronę można otworzyć bezpośrednio z pliku `index.html` albo uruchomić dowolny prosty serwer HTTP w katalogu repozytorium.

## Publikacja na GitHub Pages

1. Umieść pliki na gałęzi `main` repozytorium GitHub.
2. Otwórz ustawienia repozytorium i przejdź do sekcji **Pages**.
3. W części **Build and deployment** wybierz **Deploy from a branch**.
4. Wskaż gałąź `main`, katalog `/ (root)` i zapisz ustawienia.

Po zakończeniu wdrożenia strona będzie dostępna pod adresem podanym w sekcji **Pages**.

## Aktualizacja treści z kursu

Plik `slides-data.js` jest generowany z arkuszy kursu. Generator pomija kartkówki i treść zadań sprawdzianowych, zachowując treść dydaktyczną, zadania wykonywane podczas lekcji oraz zadania do samodzielnego wykonania. W miejscach sprawdzianów tworzy po jednym slajdzie informacyjnym z czasem, punktacją i zakresem materiału.

Przy obecnym układzie katalogów uruchom:

```text
node scripts/generate-slides.mjs ..
```

Można również przekazać inną ścieżkę do katalogu zawierającego arkusze:

```text
node scripts/generate-slides.mjs /sciezka/do/kursu
```

## Prowadzący

por. Jakub GRĄTKIEWICZ  
jakub.gratkiewicz@wat.edu.pl
