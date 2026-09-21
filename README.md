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

Plik `slides-data.js` jest generowany z arkuszy kursu. Prezentację rozpoczyna Lekcja 0 zawierająca organizację i zasady zajęć. Generator pomija treść kartkówek i zadań sprawdzianowych, zachowując treść dydaktyczną, zadania wykonywane podczas lekcji oraz zadania do samodzielnego wykonania. W miejscach sprawdzianów tworzy po jednym slajdzie informacyjnym z czasem, punktacją i zakresem materiału.

Między Lekcją 0 a Lekcją 1 znajduje się osobny blok **Konfiguracja środowiska**: instalacja Git i GitHub Desktop przez Portal Firmy, przejście z cmd do PowerShell, polecenia `cd`, `ls` i `cat`, konfiguracja autora commitów, klucze SSH i GitHub, klonowanie oraz codzienny przebieg pracy z Git. Numeracja dotychczasowych lekcji i sprawdzianów pozostaje bez zmian.

Źródłem tego bloku jest [content/konfiguracja-srodowiska.md](content/konfiguracja-srodowiska.md), przechowywany w tym repozytorium prezentacji. Każdy nagłówek drugiego poziomu tworzy osobny slajd. Polecenia są instrukcjami dla ucznia — strona ich nie wykonuje. Bezpośredni adres bloku po otwarciu prezentacji to `#/konfiguracja/0`; strzałki ←/→ przechodzą przez Lekcję 0, konfigurację i Lekcję 1 w tej kolejności.

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
