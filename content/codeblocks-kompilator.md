# Warianty instalacji Code::Blocks i konfiguracji kompilatora

## Code::Blocks i kompilator C++

**Code::Blocks** to środowisko, w którym piszesz kod i uruchamiasz budowanie projektu. **Kompilator C++**, np. G++ z pakietu MinGW, tłumaczy kod na postać potrzebną do utworzenia programu wykonywalnego.

Samo otwarcie edytora nie potwierdza obecności kompilatora. Sprawdzimy cały proces na programie `HelloWorld`.

1. Jeśli masz już Code::Blocks, utwórz projekt i sprawdź, czy działa.
2. Jeśli program nie znajduje kompilatora, spróbuj **Auto-detect**.
3. Jeśli nadal brakuje kompilatora albo nie masz jeszcze Code::Blocks, wybierz jeden z opisanych wariantów instalacji.

**Warianty są alternatywami. Jeśli program poprawnie się kompiluje i uruchamia, nie zmieniaj działającej instalacji.**

Pomoc: [dokumentacja Code::Blocks](https://www.codeblocks.org/docs/main_codeblocks_en3.html).

## Projekt aplikacji konsolowej

1. Uruchom Code::Blocks. Wybierz **File → New → Project…**.
2. Zaznacz **Console application** i kliknij **Go**. Jeśli pojawi się powitanie, wybierz **Next**.
3. Wybierz język **C++**, następnie **Next**.
4. W polu **Project title** wpisz `HelloWorld`.
5. W **Folder to create project in** wskaż własny folder na projekty, np. `C:\ProjektyCPP`, jeśli masz tam prawo zapisu. Wybierz ścieżkę bez polskich znaków i najlepiej bez spacji.
6. Kliknij **Next**. Jako **Compiler** wybierz **GNU GCC Compiler**. Pozostaw zaznaczone **Debug** i **Release**.
7. Kliknij **Finish**. Po lewej rozwiń projekt i **Sources**, a następnie otwórz **main.cpp**.

Zachowaj cały katalog projektu. Plik `HelloWorld.cbp` przechowuje ustawienia projektu, a `main.cpp` zawiera jego kod źródłowy.

## Kod programu HelloWorld

Zastąp początkową zawartość pliku `main.cpp` tym kodem i zapisz plik przez **Ctrl + S**:

```cpp
#include <iostream>

int main()
{
    std::cout << "Hello World!" << std::endl;
    return 0;
}
```

Wybierz **Build → Build and run** lub naciśnij **F9**. Code::Blocks najpierw buduje program, a potem go uruchamia.

Na tym etapie sprawdzamy środowisko. Znaczenie poszczególnych elementów kodu omówimy podczas Lekcji 1.

## Wynik poprawnego uruchomienia

W oknie konsoli powinien pojawić się napis:

```text
Hello World!
```

Code::Blocks może dodatkowo wyświetlić kod zakończenia `0` oraz prośbę o naciśnięcie dowolnego klawisza. To prawidłowe zachowanie.

**Budowanie bez błędów i widoczny napis potwierdzają, że podstawowa konfiguracja działa.** Nie musisz wtedy reinstalować programu ani wykonywać kolejnych wariantów naprawy.

Komunikat o nieprawidłowej konfiguracji kompilatora lub o braku `g++.exe` wskazuje na problem z instalacją albo ścieżką. Błąd wskazujący konkretną linię kodu może natomiast wynikać z literówki. Przeczytaj komunikat przed zmianą ustawień.

## Automatyczne wykrywanie kompilatora

1. Otwórz **Settings → Compiler…**.
2. W polu **Selected compiler** wybierz **GNU GCC Compiler**.
3. Przejdź do **Toolchain executables** i kliknij **Auto-detect**.
4. Jeżeli program znalazł kompilator, zatwierdź ustawienia przez **OK**.
5. W projekcie `HelloWorld` wybierz **Build → Rebuild**, a następnie **Build → Build and run**.

**Rebuild** buduje projekt od nowa. Używaj go po zmianie kompilatora lub jego konfiguracji, aby sprawdzić nowe ustawienia.

Jeżeli wykrywanie nie pomoże, przejdź do wyboru wariantu. Samo ustawienie nazwy **GNU GCC Compiler** nie instaluje brakujących narzędzi.

## Trzy warianty instalacji

| Wariant | Co zmieniasz? | Skąd pobierasz oprogramowanie? |
|---|---|---|
| 1. Code::Blocks z Microsoft Store | Zastępujesz dotychczasową instalację IDE | Microsoft Store |
| 2. CodeBlocksMinGW | Zastępujesz IDE pakietem udostępnionym razem z MinGW | Portal Firmy |
| 3. Osobny MinGW | Zachowujesz IDE i dodajesz kompilator | Portal Firmy |

Wybierz wariant dostępny na szkolnym komputerze. **Nie wykonuj wszystkich po kolei.** Jeśli Code::Blocks nie jest jeszcze zainstalowany, pomiń odinstalowanie w wariancie 1 lub 2.

Nazwy **CodeBlocksMinGW** i **MinGW** dotyczą pakietów udostępnionych przez naszą organizację. Ich dostępność i zawartość zależą od konfiguracji Portalu Firmy. Brak właściwego pakietu zgłoś prowadzącemu.

## Zachowanie projektów i usunięcie starej instalacji

Ten krok dotyczy **wariantów 1 i 2**, jeśli zastępujesz istniejący Code::Blocks. W wariancie 3 pozostawiasz IDE.

1. Zapisz pliki, zamknij Code::Blocks i zachowaj własne katalogi projektów, najlepiej także ich kopię. Nie usuwaj ich razem z aplikacją.
2. Otwórz **Portal Firmy → Aplikacje → Code::Blocks**. Jeśli dostępny jest przycisk **Odinstaluj**, użyj go i poczekaj na zakończenie.
3. Jeśli przycisku nie ma, sprawdź **Ustawienia Windows → Aplikacje → Zainstalowane aplikacje → Code::Blocks → Odinstaluj**. W Windows 10 lista może nazywać się **Aplikacje i funkcje**.

Jeżeli odinstalowanie jest zablokowane albo wymaga uprawnień administratora, poproś prowadzącego lub administratora o pomoc. Nie omijaj zabezpieczeń.

Pomoc: [aplikacje z Portalu Firmy](https://learn.microsoft.com/en-us/intune/user-help/apps/install-apps-windows).

## Wariant 1: Code::Blocks z Microsoft Store

Po zapisaniu projektów i odinstalowaniu poprzedniej wersji:

1. Otwórz **Microsoft Store** i wyszukaj **Code::Blocks** lub otwórz [stronę aplikacji w sklepie](https://apps.microsoft.com/detail/xpdm24hmt29wss).
2. Wybierz **Pobierz** lub **Zainstaluj** i poczekaj na zakończenie.
3. Uruchom Code::Blocks. Jeśli wyświetli wykryty **GNU GCC Compiler**, wybierz go.
4. Otwórz zapisany `HelloWorld.cbp` przez **File → Open…** albo utwórz projekt według wcześniejszej instrukcji.
5. Wybierz **Build → Rebuild**, a następnie **Build → Build and run**.

**Nie zakładaj, że sama instalacja ze sklepu zapewni kompilator.** Jeżeli go brakuje, użyj **Auto-detect** lub doinstaluj MinGW zgodnie z wariantem 3.

Jeśli szkoła blokuje Microsoft Store, skorzystaj z wariantu dostępnego w Portalu Firmy lub zgłoś problem prowadzącemu.

## Wariant 2: pakiet CodeBlocksMinGW

1. Zapisz projekty i zamknij Code::Blocks.
2. Odinstaluj dotychczasową wersję zgodnie z wcześniejszą instrukcją. Jeśli przechodzisz z wersji ze sklepu, usuń tę instalację, pozostawiając własne projekty.
3. W **Portalu Firmy** wyszukaj dokładnie **CodeBlocksMinGW**.
4. Kliknij **Zainstaluj** i poczekaj na zakończenie instalacji.
5. Uruchom Code::Blocks. Jeśli pojawi się lista kompilatorów, wybierz wykryty **GNU GCC Compiler**.
6. Otwórz `HelloWorld.cbp` lub utwórz projekt. Wybierz **Build → Rebuild**, potem **Build → Build and run**.

Ten wariant zakłada szkolny pakiet Code::Blocks razem z MinGW. Jeśli program nie wykryje dołączonego kompilatora, użyj **Auto-detect** albo wskaż jego folder ręcznie według kolejnych slajdów.

Jeśli nie widzisz pakietu o tej nazwie, skontaktuj się z prowadzącym. Nie wybieraj przypadkowego programu o podobnej nazwie.

## Wariant 3: osobna instalacja MinGW

W tym wariancie **pozostawiasz zainstalowany Code::Blocks** i dodajesz kompilator.

1. Zamknij Code::Blocks.
2. Otwórz **Portal Firmy** i wyszukaj pakiet **MinGW**.
3. Kliknij **Zainstaluj** i poczekaj na zakończenie.
4. Ponownie uruchom Code::Blocks.
5. Otwórz **Settings → Compiler… → GNU GCC Compiler → Toolchain executables** i wybierz **Auto-detect**.
6. Jeśli wykrywanie się uda, zatwierdź ustawienia i sprawdź projekt przez **Rebuild**, potem **Build and run**.

Jeśli wykrywanie się nie uda, znajdź rzeczywisty folder MinGW i wskaż go ręcznie. Te same kroki możesz zastosować do MinGW dołączonego do pakietu z wariantu 2.

## Lokalizacja plików kompilatora

W Eksploratorze plików odszukaj instalację MinGW. Jej lokalizacja może być podana w opisie pakietu w Portalu Firmy.

Przykładowe katalogi:

```text
C:\MinGW
C:\mingw64
C:\Program Files\CodeBlocks\MinGW
```

To **przykłady**, a nie ścieżki do bezwarunkowego przepisania. W swojej instalacji znajdź podkatalog **bin**, a w nim pliki **gcc.exe** i **g++.exe**.

Nazwy mogą zawierać przedrostek, np. `x86_64-w64-mingw32-g++.exe`. Zapisz rzeczywistą lokalizację i nazwy. Pusty katalog nazwany `MinGW` nie zastępuje instalacji kompilatora.

## Ręczne ustawienie katalogu MinGW

1. Wybierz **Settings → Compiler…**.
2. Ustaw **Selected compiler: GNU GCC Compiler**.
3. Otwórz **Toolchain executables**.
4. Obok **Compiler's installation directory** kliknij **…** i wskaż główny katalog swojej instalacji MinGW.

| Znaleziony plik | Katalog do wpisania w ustawieniach |
|---|---|
| `C:\MinGW\bin\g++.exe` | `C:\MinGW` |
| `C:\mingw64\bin\g++.exe` | `C:\mingw64` |
| `C:\Program Files\CodeBlocks\MinGW\bin\g++.exe` | `C:\Program Files\CodeBlocks\MinGW` |

**W tym polu wskazujesz folder nadrzędny wobec `bin`, a nie sam `bin` ani plik `g++.exe`.**

Pomoc: [konfiguracja MinGW w Code::Blocks, rozdział 5.2.3](https://www.codeblocks.org/docs/main_codeblocks_en3.html).

## Nazwy narzędzi w Toolchain executables

W części **Program Files** sprawdź pola:

| Pole w Code::Blocks | Typowa nazwa pliku |
|---|---|
| C compiler | `gcc.exe` |
| C++ compiler | `g++.exe` |
| Linker for dynamic libs | `g++.exe` |

Nazwy muszą zgadzać się z plikami w katalogu **bin** wybranej instalacji. Jeśli pliki mają przedrostki, wpisz pełne nazwy, np. `x86_64-w64-mingw32-g++.exe` dla kompilatora C++.

W razie potrzeby użyj przycisku **…** obok odpowiedniego pola. Wybieraj narzędzia z tej samej instalacji MinGW, aby nie mieszać różnych zestawów.

Zatwierdź ustawienia przyciskiem **OK**.

## Ustawienia projektu i ponowne uruchomienie

1. Otwórz projekt `HelloWorld`.
2. Wybierz **Project → Build options…**.
3. Po lewej zaznacz nazwę całego projektu. Sprawdź, czy wybrano **GNU GCC Compiler**.
4. Jeśli osobny wybór kompilatora występuje dla **Debug** lub **Release**, sprawdź także te pozycje.
5. Zatwierdź zmiany. Wybierz **Build → Rebuild**.
6. Jeśli budowanie zakończy się bez błędów, wybierz **Build → Build and run**.

Napis `Hello World!` w konsoli potwierdza działanie podstawowej konfiguracji.

Przy poprawnym wskazaniu narzędzi w Code::Blocks do tego sprawdzenia nie musisz dodatkowo zmieniać systemowej zmiennej **Path**. Konfiguracja kompilatora w IDE i dostępność polecenia `g++` w PowerShell to odrębne ustawienia.

## Rozpoznawanie błędów budowania

Otwórz **Build log** w dolnym panelu. Jeśli panel jest ukryty, włącz go przez **View → Logs**.

| Objaw | Co sprawdzić? |
|---|---|
| Nie znaleziono kompilatora lub `g++.exe` | Czy MinGW jest zainstalowany? Czy katalog i nazwy narzędzi zgadzają się z plikami na dysku? |
| Błąd wskazuje linię w `main.cpp` | Porównaj kod z przykładem, zwłaszcza średniki, nawiasy i cudzysłowy. |
| Pytanie o zbudowanie projektu | Wybierz **Build and run**, aby skompilować kod przed uruchomieniem. |
| Nie można nadpisać pliku wykonywalnego | Zamknij poprzednie okno programu `HelloWorld`, potem ponów **Rebuild**. |
| Budowanie się udało, ale program nie startuje | Zapisz dokładny komunikat, np. o brakującej bibliotece lub blokadzie uruchamiania. |

Nie reinstaluj kompilatora tylko dlatego, że program zgłasza błąd składni w kodzie.

## Zgłoszenie problemu i gotowość do Lekcji 1

Jeśli nadal nie możesz zbudować i uruchomić programu, przekaż prowadzącemu:

- treść komunikatów z **Build log**;
- zrzut ustawień **Toolchain executables**;
- informację, który wariant instalacji wybrałeś i gdzie znajduje się MinGW.

Zachowaj projekt. Nie usuwaj kodu ani nie zmieniaj przypadkowo kolejnych ustawień. Brak uprawnień, niedostępny pakiet lub blokadę uruchamiania zgłoś prowadzącemu albo administratorowi.

Przed Lekcją 1 potrafisz znaleźć `HelloWorld.cbp`, otworzyć `main.cpp`, zapisać zmianę i uruchomić program przez **Build and run**.

Dokumentacja: [Code::Blocks](https://www.codeblocks.org/docs/main_codeblocks_en3.html), [Portal Firmy](https://learn.microsoft.com/en-us/intune/user-help/apps/install-apps-windows).
