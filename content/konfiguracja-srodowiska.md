# Konfiguracja środowiska

## Instalacja przez Portal Firmy

Przygotujemy Windows do pracy z repozytorium zadań. Potrzebujesz dostępu do konta szkolnego oraz własnego konta GitHub, także urządzenia do potwierdzenia logowania.

1. Otwórz menu Start i uruchom aplikację **Portal Firmy**.
2. Zaloguj się kontem szkolnym, jeśli aplikacja o to poprosi.
3. Wyszukaj **Git** lub **Git for Windows**, wybierz aplikację i kliknij **Zainstaluj**.
4. Tak samo zainstaluj **GitHub Desktop** — graficzną aplikację do pracy z Git.
5. Poczekaj, aż obie instalacje zakończą się. Zamknij wcześniej otwarte terminale.

**Git** to narzędzie kontroli wersji. **GitHub** to platforma przechowująca repozytoria w internecie. **GitHub Desktop** udostępnia interfejs graficzny; w tej lekcji poznajemy polecenia Git w PowerShell.

Jeśli aplikacji brakuje w Portalu Firmy lub instalacja wymaga uprawnień, zgłoś to prowadzącemu. Nie omijaj zabezpieczeń komputera.

Pomoc: [instalowanie aplikacji z Portalu Firmy](https://learn.microsoft.com/en-us/intune/user-help/apps/install-apps-windows), [GitHub Desktop](https://docs.github.com/en/desktop/overview/getting-started-with-github-desktop).

## Od konsoli cmd do PowerShell

Naciśnij **Win + R**, wpisz `cmd` i zatwierdź Enterem. W oknie wiersza polecenia uruchom powłokę PowerShell:

```cmd
powershell
```

Początek wiersza polecenia powinien zawierać `PS`. Od tej chwili kolejne polecenia wykonujesz w PowerShell. Nie wpisuj samodzielnie oznaczenia `PS` ani wyświetlanej przed kursorem ścieżki.

Sprawdź instalację Git:

```powershell
git
git --version
```

`git` wyświetla pomoc i listę podstawowych poleceń. `git --version` podaje zainstalowaną wersję. Komunikat, że `git` nie jest rozpoznawany, oznacza, że powłoka go nie znajduje. Otwórz nowe okno po instalacji; jeśli to nie pomaga, zgłoś problem prowadzącemu.

`powershell` uruchamia powłokę wewnątrz bieżącego okna. Polecenie `exit` zakończy tę sesję i wróci do cmd.

Pomoc: [uruchamianie Windows PowerShell](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_powershell_exe?view=powershell-5.1).

## PowerShell: cd — zmiana katalogu

Każde polecenie wykonujesz w określonym katalogu. `cd` jest skrótem polecenia `Set-Location` i zmienia bieżący katalog; nie przenosi plików.

```powershell
cd "$env:USERPROFILE"
cd C:\Users
cd ..
```

Pierwsze polecenie otwiera katalog Twojego profilu użytkownika. Drugie przechodzi do `C:\Users`, a trzecie o poziom wyżej, czyli w tym przykładzie do `C:\`.

- `cd .\zadania` — wejście do istniejącego podkatalogu `zadania`.
- `cd ..` — przejście do katalogu nadrzędnego.
- `cd "C:\Moje projekty"` — ścieżkę ze spacjami ujmij w cudzysłowy; katalog musi już istnieć.
- `pwd` — pokazanie bieżącej lokalizacji, jeśli nie wiesz, gdzie jesteś.

**Zadanie:** przejdź do swojego profilu, potem o katalog wyżej. Sprawdź lokalizację poleceniem `pwd`.

Pomoc: [Set-Location](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/set-location?view=powershell-7.5).

## PowerShell: ls — lista plików i katalogów

`ls` to w Windows PowerShell skrót `Get-ChildItem`. Bez dodatkowej ścieżki pokazuje zawartość bieżącego katalogu.

```powershell
cd "$env:USERPROFILE"
ls
ls -Force
ls C:\Users
```

`ls -Force` pokazuje również elementy ukryte. Podanie ścieżki pozwala obejrzeć inny katalog bez przechodzenia do niego. Samo `ls` niczego nie otwiera ani nie usuwa.

Po sklonowaniu repozytorium przyda się również `ls *.cpp` — lista plików z rozszerzeniem `.cpp` w bieżącym katalogu. Gwiazdka zastępuje dowolny fragment nazwy.

**Zadanie:** wyświetl zawartość swojego profilu i wskaż nazwę jednego katalogu. Wejdź do niego za pomocą `cd`, wykonaj `ls`, a następnie wróć przez `cd ..`.

Pomoc: [Get-ChildItem](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-childitem?view=powershell-5.1).

## PowerShell: cat — odczyt pliku tekstowego

`cat` jest w Windows PowerShell skrótem `Get-Content`. Wyświetla tekst zapisany w pliku; nie edytuje go i nie uruchamia programu.

Poniższe przykłady wykonasz w katalogu zawierającym wskazane pliki. Zastąp nazwy rzeczywistymi nazwami widocznymi po `ls`.

```powershell
cat .\README.md
cat .\main.cpp
cat ".\moje notatki.txt"
```

`cat .\main.cpp` pokazuje kod źródłowy. Nie zastępuje kompilacji ani uruchomienia programu C++.

`ls` służy do przeglądania nazw plików i katalogów, a `cat` — zawartości konkretnego pliku tekstowego. Przy błędzie „ścieżka nie istnieje” sprawdź nazwę oraz bieżący katalog.

**Zadanie:** wybierz dostępny plik tekstowy i wyświetl jego zawartość. Jeśli nie masz jeszcze takiego pliku, wróć do tego polecenia po sklonowaniu repozytorium.

Pomoc: [Get-Content](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/get-content?view=powershell-7.5).

## Dane autora commitów

Przed pierwszym commitem ustaw dane autora. W poniższych poleceniach wpisz własne imię, nazwisko i adres e-mail powiązany z kontem GitHub. Jeśli nie chcesz ujawniać prywatnego adresu w historii, użyj adresu `noreply` podanego w ustawieniach e-mail na GitHub.

```powershell
git config --global user.name "Imie Nazwisko"
git config --global user.email "twoj_email@example.com"
```

`--global` zapisuje ustawienia dla Twojego konta użytkownika na tym komputerze. Zwykle wystarczy zrobić to raz. Te dane opisują autora zmian; nie logują do GitHub.

Sprawdź zapisane wartości:

```powershell
git config --global --get user.name
git config --global --get user.email
```

Pomoc: [przygotowanie Git do pracy](https://docs.github.com/en/get-started/git-basics/set-up-git).

## Utworzenie klucza SSH w PowerShell

Klucz SSH umożliwi uwierzytelnienie podczas pracy z GitHub. Najpierw sprawdź, czy narzędzia są dostępne i czy masz już klucze:

```powershell
Get-Command ssh, ssh-keygen
ls "$env:USERPROFILE\.ssh"
```

Brak katalogu `.ssh` przy pierwszej konfiguracji jest normalny. Jeśli nie ma polecenia `ssh-keygen`, poproś prowadzącego o pomoc z klientem OpenSSH. Nie potrzebujesz serwera SSH.

Jeżeli nie masz klucza do wykorzystania, wygeneruj nową parę, podając własny e-mail jako opis:

```powershell
ssh-keygen -t ed25519 -C "twoj_email@example.com"
```

1. Przy pytaniu o miejsce zapisu naciśnij Enter, aby zaakceptować domyślną ścieżkę, o ile nie nadpisujesz istniejącego klucza.
2. Ustaw frazę zabezpieczającą klucz — `passphrase` — i wpisz ją ponownie. Znaki nie są widoczne podczas wpisywania.
3. Jeśli program pyta o nadpisanie istniejącego pliku, odpowiedz `n` i skonsultuj się z prowadzącym. Nie niszcz wcześniej używanego klucza.

Pomoc: [generowanie klucza SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent?platform=windows).

## Pliki klucza: prywatny i publiczny

Po zaakceptowaniu domyślnej lokalizacji klucze znajdziesz w `.ssh` we własnym profilu, zwykle `C:\Users\NAZWA_UZYTKOWNIKA\.ssh`. W PowerShell zapis `$env:USERPROFILE` oznacza ścieżkę do Twojego profilu.

```powershell
ls "$env:USERPROFILE\.ssh"
```

| Plik | Znaczenie | Co z nim robimy? |
|---|---|---|
| `id_ed25519` | Klucz prywatny | Chronimy go na swoim komputerze. Nie wysyłamy go do GitHub, repozytorium ani innych osób. |
| `id_ed25519.pub` | Klucz publiczny | Jego zawartość dodajemy do ustawień konta GitHub. |

To dwa pliki utworzone przez `ssh-keygen`. Fraza `passphrase` zabezpiecza klucz prywatny; nie jest hasłem do konta GitHub. Może być wymagana przy kolejnych połączeniach.

**Nie twórz kluczy w katalogu repozytorium. Do GitHub kopiujemy wyłącznie plik z końcówką `.pub`.**

Pomoc: [klucze SSH w Windows](https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_keymanagement).

## Dodanie klucza publicznego do GitHub

Wyświetl zawartość klucza publicznego i skopiuj cały wiersz, od `ssh-ed25519` do końca. Nie kopiuj polecenia ani znaku zachęty PowerShell.

```powershell
cat "$env:USERPROFILE\.ssh\id_ed25519.pub"
```

Możesz też skopiować samą zawartość do schowka:

```powershell
cat "$env:USERPROFILE\.ssh\id_ed25519.pub" | clip
```

1. Zaloguj się na własne konto GitHub. Kliknij zdjęcie profilowe, potem **Settings**.
2. Otwórz **SSH and GPG keys** i wybierz **New SSH key**.
3. W polu **Title** podaj opis komputera, np. `Laptop szkolny`.
4. Jako **Key type** wybierz **Authentication Key**. W polu **Key** wklej klucz publiczny.
5. Kliknij **Add SSH key** i potwierdź dostęp do konta, jeśli GitHub o to poprosi.

Pomoc: [dodawanie klucza SSH do konta](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account).

## Sprawdzenie połączenia SSH

W PowerShell wykonaj:

```powershell
ssh -T git@github.com
```

Użyj dokładnie `git@github.com` — w tym poleceniu nie zastępuj słowa `git` swoim loginem.

Przy pierwszym połączeniu program może zapytać o zaufanie do serwera. Porównaj wyświetlony odcisk klucza z [oficjalnymi odciskami GitHub](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/githubs-ssh-key-fingerprints). Wpisz `yes` tylko wtedy, gdy się zgadzają. Przy różnicy przerwij i zgłoś problem.

Jeśli pojawi się prośba o `passphrase`, podaj frazę ustawioną dla klucza. Udane połączenie wyświetla powitanie z Twoim loginem i komunikat `You've successfully authenticated`. Informacja o braku dostępu do powłoki GitHub jest normalna; to nie jest zdalny pulpit ani konsola do pracy.

Po zaakceptowaniu serwera może powstać plik `.ssh\known_hosts`. Zawiera zapamiętane klucze serwerów; nie jest Twoim kluczem publicznym ani prywatnym.

Pomoc: [sprawdzanie połączenia SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/testing-your-ssh-connection).

## Katalog na repozytoria — bez polskich znaków

**Jeśli nazwa Twojego katalogu użytkownika zawiera polskie znaki, np. `C:\Users\Łukasz`, klonuj repozytorium poza tym katalogiem. Wybierz ścieżkę bez polskich znaków, np. `C:\Repo`.**

To zalecenie dla naszego środowiska C++: pozwala ograniczyć problemy części narzędzi z nazwami ścieżek. Nie oznacza, że Git w ogóle nie obsługuje polskich znaków. Sprawdź całą ścieżkę, nie tylko nazwę ostatniego folderu; wybieraj też proste nazwy bez spacji.

W Eksploratorze utwórz katalog `C:\Repo`, jeśli jeszcze go nie ma. Następnie:

```powershell
cd C:\Repo
pwd
ls
```

Jeżeli nie masz prawa tworzyć katalogów w tym miejscu, poproś prowadzącego o wskazanie innej zapisywalnej lokalizacji bez polskich znaków. Nie zmieniaj nazwy profilu Windows ani jego uprawnień.

Klucze SSH pozostają w `.ssh` w profilu użytkownika. Nie przenoś ich do repozytorium razem z zadaniami.

## git clone — pierwsza kopia repozytorium

Otwórz na GitHub właściwe repozytorium zadań, do którego masz prawo zapisu. Wybierz **Code**, zakładkę **SSH** i skopiuj adres. Nie wybieraj ZIP-a ani adresu HTTPS w tym ćwiczeniu.

Poniżej jest wzór: zastąp `UZYTKOWNIK/NAZWA_REPO` danymi ze skopiowanego adresu. Właścicielem może być również organizacja szkolna.

```powershell
cd C:\Repo
git clone git@github.com:UZYTKOWNIK/NAZWA_REPO.git
cd .\NAZWA_REPO
git status
```

`git clone` tworzy podkatalog repozytorium i pobiera pliki wraz z historią. Poczekaj na zakończenie klonowania i powrót znaku zachęty, zanim wejdziesz do folderu albo zaczniesz kopiować do niego pliki.

Klonowanie wykonujesz raz dla danej lokalnej kopii, a nie przed każdą lekcją. Aktualizacje pobierzesz później przez `git pull`. Dalsze polecenia Git wykonuj wewnątrz sklonowanego repozytorium.

Pomoc: [klonowanie repozytorium z GitHub](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository).

## Podsumowanie poleceń Git

| Polecenie | Do czego służy? |
|---|---|
| `git clone ADRES` | Tworzy lokalną kopię repozytorium. W miejsce `ADRES` wstaw adres SSH z GitHub. |
| `git status` | Pokazuje zmiany w plikach i to, które przygotowano do commita. |
| `git add .` | Przygotowuje zmiany z bieżącego katalogu i jego podkatalogów do następnego commita. |
| `git commit -m "nazwa commita"` | Zapisuje przygotowane zmiany w lokalnej historii; tekst w cudzysłowie jest opisem commita. |
| `git push` | Wysyła lokalne commity do repozytorium zdalnego, np. na GitHub. |
| `git pull` | Pobiera zmiany z repozytorium zdalnego i integruje je z bieżącą gałęzią. |

W tym kursie pracujemy w sklonowanym repozytorium, na gałęzi śledzącej gałąź z GitHub. Dzięki temu zwykle wystarczą samo `git push` i samo `git pull`.

Dokumentacja: [clone](https://git-scm.com/docs/git-clone), [status](https://git-scm.com/docs/git-status), [add](https://git-scm.com/docs/git-add), [commit](https://git-scm.com/docs/git-commit), [push](https://git-scm.com/docs/git-push), [pull](https://git-scm.com/docs/git-pull).

## Plik roboczy, obszar przygotowania i commit

| Etap | Gdzie są zmiany? | Następna czynność |
|---|---|---|
| Zapisany plik | W katalogu roboczym na Twoim komputerze | Sprawdź `git status`. |
| Po `git add .` | W obszarze przygotowania, czyli indeksie Git | Utwórz commit z przygotowanych zmian. |
| Po `git commit` | W lokalnej historii repozytorium | Wyślij commity przez `git push`. |
| Po udanym `git push` | Również w repozytorium na GitHub | Sprawdź je w przeglądarce. |

Uruchamiaj `git add .` z głównego katalogu repozytorium, jeśli chcesz uwzględnić zmiany w całym projekcie. Polecenie obejmuje nowe pliki, modyfikacje i usunięcia w tym zakresie; nie dodaje nowych plików wykluczonych przez `.gitignore`.

Przed dodaniem przejrzyj listę. Nie dodawaj haseł, kluczy prywatnych ani przypadkowych plików. Jeśli zmienisz plik ponownie po `git add .`, wykonaj `add` jeszcze raz, aby nowa wersja trafiła do commita.

Pomoc: [obszar przygotowania i git add](https://git-scm.com/docs/git-add), [zapis commita](https://git-scm.com/docs/git-commit).

## Codzienny przebieg pracy

Na początku pracy wejdź do głównego katalogu repozytorium i sprawdź stan. Gdy nie masz niezapisanych w commitach zmian, pobierz aktualizacje:

```powershell
git status
git pull
```

Następnie rozwiąż zadanie, zapisz pliki i sprawdź działanie programu. Na koniec wykonaj kolejno:

```powershell
git status
git add .
git status
git commit -m "Rozwiazanie zadania 01"
git push
```

Sprawdzasz zmiany, dodajesz je do obszaru przygotowania, kontrolujesz wybór, tworzysz lokalny commit i udostępniasz go na GitHub. W opisie commita napisz, co zmieniłeś; nie nazywa on nowego pliku ani gałęzi.

Po `push` otwórz repozytorium w przeglądarce i sprawdź pliki oraz ostatni commit. Samo zapisanie pliku lub wykonanie `commit` nie udostępnia pracy prowadzącemu.

Pomoc: [sprawdzanie stanu](https://git-scm.com/docs/git-status), [wysyłanie commitów](https://git-scm.com/docs/git-push), [pobieranie zmian](https://git-scm.com/docs/git-pull).

## Zadanie: pierwszy pełny cykl pracy

Pracuj wyłącznie we własnym repozytorium zadań lub w repozytorium wskazanym przez prowadzącego, do którego masz prawo zapisu.

1. Wejdź do jego lokalnego katalogu. Wykonaj `git status`, a przy czystym stanie `git pull`.
2. Utwórz w edytorze plik `notatki-konfiguracja.txt` i zapisz w nim dwa zdania: czym różni się `ls` od `cat` i czym różni się `commit` od `push`. Jeśli plik już istnieje, dopisz notatkę bez kasowania wcześniejszej treści.
3. Zapisz plik. Sprawdź jego treść przez `cat .\notatki-konfiguracja.txt`.
4. Wykonaj `git status`, `git add .`, ponownie `git status`, a potem `git commit -m "Notatki z konfiguracji"` i `git push`.
5. Znajdź plik oraz commit na GitHub i pokaż je prowadzącemu.

Nie wpisuj do notatki haseł, frazy zabezpieczającej ani zawartości kluczy.

**Pytania:** czy commit jest już widoczny na GitHub przed `push`? Czy `git add .` zapisze w commicie zmianę dopisaną dopiero po wykonaniu tego polecenia?

## Gdy polecenie nie działa

- **`git` nie jest rozpoznawany:** sprawdź zakończenie instalacji Git w Portalu Firmy i uruchom nowe okno PowerShell.
- **`not a git repository`:** sprawdź lokalizację przez `pwd`; wejdź przez `cd` do właściwego sklonowanego repozytorium.
- **`Permission denied (publickey)`:** sprawdź, czy dodałeś plik `.pub` do właściwego konta GitHub i czy powitanie po `ssh -T git@github.com` zawiera Twój login. Poproś prowadzącego o pomoc; nie wysyłaj mu klucza prywatnego.
- **`nothing to commit`:** sprawdź, czy zapisałeś plik i przygotowałeś jego zmianę przez `git add .`.
- **Odrzucony `push` lub konflikt przy `pull`:** nie używaj `--force` i nie usuwaj repozytorium. Zatrzymaj się, sprawdź komunikat oraz `git status` i poproś o pomoc w połączeniu zmian.

Przed następną lekcją potrafisz otworzyć PowerShell, wskazać repozytorium, wyświetlić plik oraz przejść pełny cykl od zmiany pliku do jej udostępnienia na GitHub.
