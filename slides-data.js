window.CPP_COURSE = {
  "meta": {
    "title": "Wprowadzenie do programowania z wykorzystaniem języka C++",
    "shortTitle": "Wprowadzenie do C++",
    "standard": "C++17",
    "teacher": "por. Jakub GRĄTKIEWICZ",
    "email": "jakub.gratkiewicz@wat.edu.pl",
    "lessonCount": 25,
    "examCount": 5,
    "meetingCount": 30,
    "sectionCount": 367
  },
  "lessons": [
    {
      "number": 1,
      "id": "lekcja-01",
      "kind": "lesson",
      "title": "pierwszy program, zmienne oraz wejście i wyjście",
      "sourceFile": "01_pierwszy_program_zmienne_i_wyjscie.md",
      "checksum": "f25edc73bbaa",
      "sections": [
        {
          "id": "01-visual-studio-code",
          "title": "Visual Studio Code",
          "context": "",
          "kind": "theory",
          "markdown": "Visual Studio Code, w skrócie VS Code, jest edytorem kodu. Pozwala tworzyć i porządkować pliki programu, koloruje składnię i może podpowiadać fragmenty kodu. Sam VS Code nie tłumaczy jednak kodu C++ na działający program. Do tego potrzebny jest osobno zainstalowany kompilator, na przykład GCC, Clang albo MSVC.\n\nPlik z kodem źródłowym C++ zapisujemy z rozszerzeniem `.cpp`, na przykład `program.cpp`."
        },
        {
          "id": "02-kompilator",
          "title": "Kompilator",
          "context": "",
          "kind": "theory",
          "markdown": "Procesor nie wykonuje bezpośrednio instrukcji zapisanych w C++. Kompilator tłumaczy cały kod źródłowy na postać zrozumiałą dla komputera i informuje o wykrytych błędach. Po udanej kompilacji powstaje program, który można uruchomić.\n\nSchemat pracy wygląda następująco:\n\n`kod w pliku .cpp → kompilator → program wykonywalny → uruchomienie`\n\nPrzykładowa kompilacja za pomocą kompilatora `g++`:\n\n```text\ng++ program.cpp -std=c++17 -Wall -Wextra -o program\n```\n\nProgram uruchamiamy poleceniem `./program` w systemie Linux lub macOS albo `.\\program.exe` w programie PowerShell w systemie Windows."
        },
        {
          "id": "03-pierwszy-program",
          "title": "Pierwszy program",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n\nint main()\n{\n    std::cout << \"Hello World!\" << std::endl;\n    return 0;\n}\n```\n\nZnaczenie kolejnych elementów:\n\n- `#include <iostream>` udostępnia narzędzia do wyświetlania i wczytywania danych;\n- `int main()` rozpoczyna główną funkcję programu; wykonanie programu zaczyna się właśnie w tym miejscu;\n- `{` i `}` wyznaczają początek i koniec funkcji;\n- `std::cout` wysyła dane na standardowe wyjście, którym zwykle jest terminal;\n- `<<` przekazuje kolejne dane do `std::cout`;\n- `std::endl` kończy bieżący wiersz, przechodzi do następnego i opróżnia bufor wyjścia;\n- średnik `;` kończy instrukcję;\n- `return 0;` informuje system, że program zakończył się poprawnie.\n\nZapis `std::cout` oznacza, że `cout` znajduje się w przestrzeni nazw `std`. Pełne nazwy można skrócić, umieszczając po dyrektywach `#include` instrukcję `using namespace std;`:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    cout << \"Hello World!\" << endl;\n    return 0;\n}\n```\n\nOba programy działają tak samo. W dalszych przykładach będziemy korzystać z `using namespace std;`."
        },
        {
          "id": "04-zmienne",
          "title": "Zmienne",
          "context": "",
          "kind": "theory",
          "markdown": "Zmienna jest nazwanym miejscem w pamięci przeznaczonym na dane. Każda zmienna ma nazwę, typ i wartość. Typ określa, jakie dane można przechowywać w zmiennej i jakie działania można na nich wykonywać.\n\nNa początku wystarczą następujące typy:\n\n| Typ | Przeznaczenie | Przykładowa wartość |\n|---|---|---|\n| `int` | liczba całkowita | `25` |\n| `char` | pojedynczy znak | `'A'` |\n| `float` | liczba rzeczywista o mniejszej precyzji | `1.75F` |\n| `double` | liczba rzeczywista o większej precyzji | `3.14159` |\n| `bool` | wartość logiczna | `true` albo `false` |\n| `string` | napis, czyli ciąg znaków | `\"Ala\"` |\n\nPojedynczy znak zapisujemy w apostrofach, na przykład `'A'`. Tekst zapisujemy w cudzysłowie, na przykład `\"Ala\"`.\n\n`string` nie jest typem prostym, lecz klasą, a utworzona zmienna typu `string` jest obiektem. Na początku będziemy jednak korzystać z niej podobnie jak z typu prostego. Aby używać `string`, należy dołączyć nagłówek `<string>`.\n\nUtworzenie zmiennej nazywamy **deklaracją**:\n\n```cpp\nint liczba;\nchar znak;\nfloat temperatura;\ndouble odleglosc;\nstring imie;\n```\n\nNadanie pierwszej wartości podczas deklaracji nazywamy **inicjalizacją**:\n\n```cpp\nint liczba = 10;\nchar znak = 'K';\nfloat temperatura = 21.5F;\ndouble odleglosc = 1250.75;\nstring imie = \"Ala\";\n```\n\nNie należy odczytywać niezainicjalizowanej zmiennej lokalnej. Jej wartość jest nieokreślona. Najbezpieczniej nadać zmiennej wartość od razu.\n\nNazwa zmiennej może zawierać litery, cyfry i znak `_`, ale nie może zaczynać się cyfrą ani być słowem zarezerwowanym języka C++. Wielkość liter ma znaczenie: `wiek` i `Wiek` to dwie różne nazwy.\n\nPrzykład 1.0 – deklarowanie zmiennych:\n\n```cpp\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main()\n{\n    int liczba_calkowita = 0;\n    char znak = 'A';\n    float liczba_rzeczywista = 0.5F;\n    double liczba_dokladna = 0.123456789;\n    string napis = \"C++\";\n\n    cout << liczba_calkowita << ' '\n         << znak << ' '\n         << liczba_rzeczywista << ' '\n         << liczba_dokladna << ' '\n         << napis << endl;\n\n    return 0;\n}\n```\n\nProgram tworzy pięć zmiennych różnych typów i nadaje im wartości początkowe."
        },
        {
          "id": "05-zadania",
          "title": "Zadania",
          "context": "Zmienne",
          "kind": "tasks",
          "markdown": "1. Jaki typ wybierzesz do przechowania wieku, ceny, pojedynczej litery i imienia?\n2. Dodaj do przykładu zmienną `miasto`, która przechowuje nazwę miasta.\n3. Zmień wartość zmiennej `napis` z `\"C++\"` na `\"Programowanie\"`."
        },
        {
          "id": "06-wyswietlanie-danych-za-pomoca-cout",
          "title": "Wyświetlanie danych za pomocą `cout`",
          "context": "",
          "kind": "theory",
          "markdown": "Za pomocą `cout` można wyświetlać tekst, wartości zmiennych i wyniki obliczeń.\n\nPrzykład 1.1 – wyświetlenie tekstu:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    cout << \"Hello World!\" << endl;\n    return 0;\n}\n```\n\nWynik:\n\n```text\nHello World!\n```"
        },
        {
          "id": "07-zadania",
          "title": "Zadania",
          "context": "Wyświetlanie danych za pomocą `cout`",
          "kind": "tasks",
          "markdown": "1. W jaki sposób zmienić kod, aby wyświetlił się napis `Witaj świecie!`?\n2. Jak zmienić kod, aby drugi napis pojawił się pod obecnym napisem?\n3. Jak wyświetlić dwa napisy w tym samym wierszu?\n\nPrzykład 1.2 – wyświetlenie wartości zmiennej:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int liczba_calkowita = 0;\n    cout << \"Liczba calkowita: \" << liczba_calkowita << endl;\n\n    return 0;\n}\n```\n\nWynik:\n\n```text\nLiczba calkowita: 0\n```"
        },
        {
          "id": "08-zadania",
          "title": "Zadania",
          "context": "Wyświetlanie danych za pomocą `cout`",
          "kind": "tasks",
          "markdown": "1. Zmień wartość zmiennej `liczba_calkowita` z `0` na `25`. Jaki wynik wyświetli program?\n2. Dodaj drugą zmienną typu `int` i wyświetl jej wartość w tym samym wierszu.\n\nPrzykład 1.3 – wyświetlenie kilku zmiennych:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int liczba_calkowita = 0;\n    char znak = 'a';\n    float liczba_rzeczywista = 0.4F;\n\n    cout << liczba_calkowita << ' '\n         << znak << ' '\n         << liczba_rzeczywista << endl;\n\n    return 0;\n}\n```\n\nWynik:\n\n```text\n0 a 0.4\n```"
        },
        {
          "id": "09-zadania",
          "title": "Zadania",
          "context": "Wyświetlanie danych za pomocą `cout`",
          "kind": "tasks",
          "markdown": "1. Dodaj zmienną `string napis = \"Program\"` i wyświetl ją razem z pozostałymi wartościami.\n2. Zmień program tak, aby każda wartość pojawiła się w osobnym wierszu."
        },
        {
          "id": "10-wczytywanie-danych-za-pomoca-cin",
          "title": "Wczytywanie danych za pomocą `cin`",
          "context": "",
          "kind": "theory",
          "markdown": "`cin` jest standardowym strumieniem wejściowym. Dane zwykle są wpisywane z klawiatury. Operator `>>` pobiera wartość i zapisuje ją w podanej zmiennej.\n\nPrzykład 1.4 – wczytanie liczby całkowitej:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int liczba_calkowita = 0;\n\n    cin >> liczba_calkowita;\n\n    return 0;\n}\n```\n\nPo uruchomieniu program czeka na wpisanie liczby. Sam nie wyświetla jednak informacji o tym, czego oczekuje. Dlatego przed wczytaniem danych warto wypisać krótki komunikat."
        },
        {
          "id": "11-zadania",
          "title": "Zadania",
          "context": "Wczytywanie danych za pomocą `cin`",
          "kind": "tasks",
          "markdown": "1. Dodaj przed instrukcją `cin` komunikat informujący, że należy podać liczbę całkowitą.\n2. Wyświetl wczytaną liczbę przed zakończeniem programu.\n\nPrzykład 1.5 – komunikat oraz sprawdzenie wczytanej wartości:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int liczba_calkowita = 0;\n\n    cout << \"Wartosc przed wczytaniem: \" << liczba_calkowita << endl;\n    cout << \"Podaj liczbe calkowita: \";\n    cin >> liczba_calkowita;\n    cout << \"Wartosc po wczytaniu: \" << liczba_calkowita << endl;\n\n    return 0;\n}\n```\n\nPrzykładowy przebieg:\n\n```text\nWartosc przed wczytaniem: 0\nPodaj liczbe calkowita: 10\nWartosc po wczytaniu: 10\n```"
        },
        {
          "id": "12-zadania",
          "title": "Zadania",
          "context": "Wczytywanie danych za pomocą `cin`",
          "kind": "tasks",
          "markdown": "1. Zmień program tak, aby wczytywał liczbę typu `double`.\n2. Zmień oba komunikaty tak, aby pasowały do nowego typu zmiennej.\n\nJedna instrukcja może wczytać kilka wartości. Użytkownik rozdziela je spacją albo klawiszem Enter.\n\nPrzykład 1.6 – wczytanie kilku wartości:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int liczba_calkowita = 0;\n    char znak = ' ';\n    float liczba_rzeczywista = 0.0F;\n\n    cout << \"Podaj liczbe calkowita, znak i liczbe rzeczywista: \";\n    cin >> liczba_calkowita >> znak >> liczba_rzeczywista;\n\n    cout << \"Wczytano: \" << liczba_calkowita << ' '\n         << znak << ' ' << liczba_rzeczywista << endl;\n\n    return 0;\n}\n```\n\nKażda wpisana wartość musi pasować do typu odpowiedniej zmiennej. Na tym etapie zakładamy, że użytkownik podaje poprawne dane."
        },
        {
          "id": "13-zadania",
          "title": "Zadania",
          "context": "Wczytywanie danych za pomocą `cin`",
          "kind": "tasks",
          "markdown": "1. Zmień przykład 1.5 tak, aby program wczytywał wiek i wzrost.\n2. Dodaj do przykładu 1.6 zmienną `string imie` i wczytaj jej wartość.\n3. Jak zmienić kolejność wyświetlanych zmiennych bez zmiany kolejności ich wczytywania?"
        },
        {
          "id": "14-znaki-specjalne-w-tekscie",
          "title": "Znaki specjalne w tekście",
          "context": "",
          "kind": "theory",
          "markdown": "Niektóre znaki zapisujemy za pomocą sekwencji rozpoczynającej się od ukośnika `\\`:\n\n| Zapis | Znaczenie |\n|---|---|\n| `\\n` | przejście do nowej linii |\n| `\\t` | tabulator |\n| `\\\\` | znak `\\` |\n| `\\\"` | znak `\"` wewnątrz tekstu |\n\nPrzykład:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    cout << \"Pierwszy wiersz\\nDrugi wiersz\" << endl;\n    cout << \"Nazwa:\\tC++\" << endl;\n    cout << \"Folder: C:\\\\Programy\" << endl;\n    cout << \"Powiedzial: \\\"Dzien dobry\\\".\" << endl;\n\n    return 0;\n}\n```"
        },
        {
          "id": "15-zadania",
          "title": "Zadania",
          "context": "Znaki specjalne w tekście",
          "kind": "tasks",
          "markdown": "1. Dodaj trzeci wiersz tekstu, korzystając ze znaku `\\n`.\n2. Wyświetl swoje imię i nazwisko rozdzielone tabulatorem.\n3. Wyświetl napis zawierający cudzysłów oraz ścieżkę zawierającą znak `\\`."
        },
        {
          "id": "16-formatowanie-liczb",
          "title": "Formatowanie liczb",
          "context": "",
          "kind": "theory",
          "markdown": "Narzędzia do formatowania znajdują się w nagłówku `<iomanip>`.\n\n`setw(n)` ustala minimalną szerokość pola dla następnej wyświetlanej wartości. Jeśli wartość jest krótsza, z lewej strony pojawią się spacje. Dłuższa wartość nie zostanie obcięta.\n\nPrzykład 1.7 – wyrównanie liczb całkowitych:\n\n```cpp\n#include <iomanip>\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a = 101;\n    int b = 13;\n    int c = 4;\n\n    cout << \"Bez formatowania:\" << endl;\n    cout << a << endl << b << endl << c << endl;\n\n    cout << \"Z szerokoscia 3:\" << endl;\n    cout << setw(3) << a << endl;\n    cout << setw(3) << b << endl;\n    cout << setw(3) << c << endl;\n\n    return 0;\n}\n```\n\nWynik drugiej części:\n\n```text\n101\n 13\n  4\n```"
        },
        {
          "id": "17-zadania",
          "title": "Zadania",
          "context": "Formatowanie liczb",
          "kind": "tasks",
          "markdown": "1. Zmień szerokość pola z 3 na 5. Jak zmieni się wynik?\n2. Dodaj liczbę `1000` i wyświetl ją za pomocą `setw(3)`. Czy liczba zostanie obcięta?\n\n`fixed` wybiera zwykły zapis dziesiętny, a `setprecision(n)` użyte razem z `fixed` ustala liczbę cyfr po kropce. Część ułamkową liczby zapisujemy z kropką, nie z przecinkiem.\n\nPrzykład 1.8 – liczba rzeczywista bez formatowania i z formatowaniem:\n\n```cpp\n#include <iomanip>\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    double liczba = 4.440441444;\n\n    cout << \"Bez formatowania: \" << liczba << endl;\n    cout << \"Dwa miejsca po kropce: \"\n         << fixed << setprecision(2) << liczba << endl;\n\n    return 0;\n}\n```\n\nWynik:\n\n```text\nBez formatowania: 4.44044\nDwa miejsca po kropce: 4.44\n```\n\nUstawienia `fixed` i `setprecision` obowiązują dla kolejnych liczb wysyłanych do danego strumienia. `setw` działa tylko na następną wartość, dlatego trzeba go użyć ponownie przed każdą kolejną liczbą."
        },
        {
          "id": "18-zadania",
          "title": "Zadania",
          "context": "Formatowanie liczb",
          "kind": "tasks",
          "markdown": "1. Zmień dokładność tak, aby wyświetlić cztery cyfry po kropce.\n2. Wyświetl tę samą liczbę z dokładnością do zera miejsc po kropce.\n3. Czy użycie `setprecision` zmienia wartość zapisaną w zmiennej?"
        },
        {
          "id": "19-przyk-ady-aczace-poznane-elementy",
          "title": "Przykłady łączące poznane elementy",
          "context": "",
          "kind": "theory",
          "markdown": "Przykład 1.9 – wczytanie wieku i wzrostu:\n\n```cpp\n#include <iomanip>\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int wiek = 0;\n    double wzrost = 0.0;\n\n    cout << \"Podaj wiek i wzrost w metrach: \";\n    cin >> wiek >> wzrost;\n\n    cout << \"Twoj wiek: \" << wiek << endl;\n    cout << \"Twoj wzrost: \"\n         << fixed << setprecision(2) << wzrost << \" m\" << endl;\n\n    return 0;\n}\n```"
        },
        {
          "id": "20-zadania",
          "title": "Zadania",
          "context": "Przykłady łączące poznane elementy",
          "kind": "tasks",
          "markdown": "1. Dodaj zmienną `string imie`, wczytaj ją i przywitaj użytkownika po imieniu.\n2. Zmień dokładność wyświetlania wzrostu z dwóch na trzy miejsca po kropce.\n\nPrzykład 1.10 – ta sama liczba z różną dokładnością:\n\n```cpp\n#include <iomanip>\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    double pi = 3.14159265359;\n\n    cout << fixed;\n    cout << setprecision(1) << pi << endl;\n    cout << setprecision(3) << pi << endl;\n    cout << setprecision(5) << pi << endl;\n\n    return 0;\n}\n```\n\nWynik:\n\n```text\n3.1\n3.142\n3.14159\n```\n\nFormatowanie zaokrągla tylko sposób wyświetlania. Nie zmienia wartości przechowywanej w zmiennej `pi`."
        },
        {
          "id": "21-zadania",
          "title": "Zadania",
          "context": "Przykłady łączące poznane elementy",
          "kind": "tasks",
          "markdown": "1. Dodaj wyświetlenie liczby `pi` bez żadnej cyfry po kropce.\n2. Dodaj wyświetlenie liczby `pi` z dokładnością do dziesięciu miejsc po kropce.\n3. Sprawdź, czy po wszystkich operacjach zmienna `pi` nadal przechowuje tę samą wartość."
        },
        {
          "id": "22-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Napisz program, który przywita się z użytkownikiem, poprosi go o podanie wieku jako liczby całkowitej, a następnie wyświetli podany wiek.\n\n2. Napisz program, który wczyta jedną liczbę rzeczywistą i wyświetli ją kolejno z dokładnością do 1, 3 i 5 miejsc po kropce. Wczytywanie poprzedź odpowiednim komunikatem.\n\n3. Napisz program, który wczyta imię, wiek i wzrost użytkownika. Następnie wyświetli te dane w trzech osobnych wierszach, a wzrost poda z dokładnością do dwóch miejsc po kropce. Załóż, że imię nie zawiera spacji.\n\n4. Napisz program, który zapisze w zmiennych trzy liczby: `7`, `42` i `1250`, a następnie wyświetli je jedna pod drugą, wyrównane do prawej strony w polu o szerokości 4 znaków.\n\nPrzed oddaniem każdego programu sprawdź, czy:\n\n- kod kompiluje się bez błędów;\n- każda zmienna ma czytelną nazwę i wartość początkową;\n- przed wczytaniem danych pojawia się zrozumiały komunikat;\n- wynik jest czytelny i kończy się przejściem do nowej linii."
        }
      ]
    },
    {
      "number": 2,
      "id": "lekcja-02",
      "kind": "lesson",
      "title": "operatory arytmetyczne",
      "sourceFile": "02_wprowadzanie_danych_i_operatory_arytmetyczne.md",
      "checksum": "bbee2c6e30d5",
      "sections": [
        {
          "id": "01-operator-i-argumenty-dzia-ania",
          "title": "Operator i argumenty działania",
          "context": "",
          "kind": "theory",
          "markdown": "Operator jest znakiem lub ciągiem znaków oznaczającym działanie. W zapisie `a + b` operatorem jest `+`, a zmienne `a` i `b` są argumentami tego działania.\n\nOperatory arytmetyczne pozwalają wykonywać obliczenia. Wynik działania można zapisać w zmiennej albo od razu wyświetlić."
        },
        {
          "id": "02-operator-przypisania",
          "title": "Operator przypisania",
          "context": "",
          "kind": "theory",
          "markdown": "Znak `=` jest operatorem przypisania. Umieszcza w zmiennej znajdującej się po lewej stronie wartość obliczoną po prawej stronie.\n\n`zmienna = wartość lub wyrażenie;`\n\nNajpierw obliczana jest prawa strona, a dopiero później wynik zostaje zapisany po lewej stronie:\n\n`wynik = 2 + 3;`\n\nPo wykonaniu tej instrukcji zmienna `wynik` przechowuje wartość `5`.\n\nPo lewej stronie musi znajdować się element, w którym można zapisać wartość, na przykład zmienna. Zapis `5 = wynik;` jest błędny. Operator `=` nie służy do sprawdzania, czy dwie wartości są równe.\n\nPrzykład 2.0 – przypisywanie wartości:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a = 0;\n    int b = 0;\n    char c = ' ';\n    char d = ' ';\n\n    a = 3;\n    b = 4;\n    c = 'A';\n    d = 'a';\n\n    cout << \"a: \" << a << \" b: \" << b\n         << \" c: \" << c << \" d: \" << d << endl;\n\n    a = b;\n    c = d;\n\n    cout << \"a: \" << a << \" b: \" << b\n         << \" c: \" << c << \" d: \" << d << endl;\n\n    return 0;\n}\n```\n\nWynik:\n\n```text\na: 3 b: 4 c: A d: a\na: 4 b: 4 c: a d: a\n```\n\nInstrukcja `a = b;` kopiuje wartość zmiennej `b` do zmiennej `a`. Nie zmienia przy tym wartości `b`.\n\nPrzypisania można łączyć:\n\n```cpp\nint a = 0;\nint b = 0;\n\na = b = 7;\n```\n\nPrzypisanie jest wykonywane od prawej strony. Najpierw `b` otrzymuje wartość `7`, a następnie ta sama wartość trafia do `a`."
        },
        {
          "id": "03-zadania",
          "title": "Zadania",
          "context": "Operator przypisania",
          "kind": "tasks",
          "markdown": "1. Zmień początkowe wartości wszystkich zmiennych i przewidź wynik programu.\n2. Rozszerz przykład z połączonym przypisaniem o trzecią zmienną."
        },
        {
          "id": "04-podstawowe-operatory-arytmetyczne",
          "title": "Podstawowe operatory arytmetyczne",
          "context": "",
          "kind": "theory",
          "markdown": "| Operator | Działanie | Przykład |\n|---|---|---|\n| `+` | dodawanie | `a + b` |\n| `-` | odejmowanie | `a - b` |\n| `*` | mnożenie | `a * b` |\n| `/` | dzielenie | `a / b` |\n| `%` | reszta z dzielenia całkowitego, czyli modulo | `a % b` |\n\nOperator `%` działa na liczbach całkowitych. Nie można użyć go bezpośrednio z wartościami typu `float` albo `double`.\n\nNie wolno dzielić przez zero ani obliczać reszty z dzielenia przez zero. Przed wykonaniem takich działań trzeba mieć pewność, że dzielnik jest różny od zera.\n\nPrzykład 2.1 – podstawowe działania arytmetyczne:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a = 10;\n    int b = 5;\n\n    int suma = a + b;\n    int roznica = a - b;\n    int iloczyn = a * b;\n    int iloraz = a / b;\n    int reszta = a % b;\n\n    cout << \"a + b = \" << suma << endl;\n    cout << \"a - b = \" << roznica << endl;\n    cout << \"a * b = \" << iloczyn << endl;\n    cout << \"a / b = \" << iloraz << endl;\n    cout << \"a % b = \" << reszta << endl;\n\n    return 0;\n}\n```\n\nWynik:\n\n```text\na + b = 15\na - b = 5\na * b = 50\na / b = 2\na % b = 0\n```\n\nWyrażenie można również umieścić bezpośrednio w instrukcji `cout`:\n\n```cpp\ncout << \"Suma: \" << a + b << endl;\n```"
        },
        {
          "id": "05-zadania",
          "title": "Zadania",
          "context": "Podstawowe operatory arytmetyczne",
          "kind": "tasks",
          "markdown": "1. Zmień wartość zmiennej `b` z `5` na `4` i oblicz wszystkie wyniki przed uruchomieniem programu.\n2. Sprawdź za pomocą operatora `%`, jaka jest reszta z dzielenia `125` przez `60`."
        },
        {
          "id": "06-kolejnosc-wykonywania-dzia-an",
          "title": "Kolejność wykonywania działań",
          "context": "",
          "kind": "theory",
          "markdown": "Działania w wyrażeniu są wykonywane zgodnie z ich priorytetem:\n\n| Priorytet | Operatory |\n|---:|---|\n| 1 – najwyższy | nawiasy `()` |\n| 2 | mnożenie `*`, dzielenie `/`, modulo `%` |\n| 3 | dodawanie `+`, odejmowanie `-` |\n| 4 – najniższy | przypisanie `=` |\n\nNawiasy pozwalają jawnie zmienić kolejność obliczeń. Operatory o tym samym priorytecie, takie jak `+` i `-`, są zwykle wykonywane od lewej strony.\n\nPrzykład 2.2 – działania z kilkoma operatorami:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a = 4;\n    int b = 5;\n    int c = 3;\n    int wynik = 0;\n\n    cout << \"a = \" << a << \" b = \" << b << \" c = \" << c << endl;\n\n    wynik = a + b * c;\n    cout << \"a + b * c = \" << wynik << endl;\n\n    wynik = (a + b) * c;\n    cout << \"(a + b) * c = \" << wynik << endl;\n\n    wynik = (a + b) * 2;\n    cout << \"(a + b) * 2 = \" << wynik << endl;\n\n    return 0;\n}\n```\n\nWynik:\n\n```text\na = 4 b = 5 c = 3\na + b * c = 19\n(a + b) * c = 27\n(a + b) * 2 = 18\n```\n\nW pierwszym działaniu mnożenie jest wykonywane przed dodawaniem. W drugim działaniu nawias wymusza wcześniejsze obliczenie sumy."
        },
        {
          "id": "07-zadania",
          "title": "Zadania",
          "context": "Kolejność wykonywania działań",
          "kind": "tasks",
          "markdown": "1. Oblicz bez uruchamiania programu wyniki wyrażeń `2 + 3 * 4` oraz `(2 + 3) * 4`.\n2. Dodaj do programu wyrażenia `a * b - c` oraz `a * (b - c)`, a następnie porównaj wyniki."
        },
        {
          "id": "08-dzielenie-ca-kowite-i-dzielenie-liczb-rzeczywistych",
          "title": "Dzielenie całkowite i dzielenie liczb rzeczywistych",
          "context": "",
          "kind": "theory",
          "markdown": "Rodzaj dzielenia zależy od typów argumentów operatora `/`.\n\nJeżeli oba argumenty są całkowite, wykonywane jest dzielenie całkowite. Część po przecinku zostaje odrzucona:\n\n`10 / 4` daje wynik `2`.\n\nJeżeli co najmniej jeden argument jest typu `float` albo `double`, wynikiem jest liczba rzeczywista:\n\n`10.0 / 4.0` daje wynik `2.5`.\n\nTyp zmiennej wynikowej nie zmienia sposobu, w jaki wcześniej wykonano dzielenie. Instrukcja `double wynik = 10 / 4;` zapisze `2.0`, ponieważ najpierw zostanie wykonane dzielenie dwóch liczb całkowitych.\n\nPrzykład 2.3a – dzielenie całkowite:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a = 10;\n    int b = 4;\n    int wynik = a / b;\n\n    cout << a << \" / \" << b << \" = \" << wynik << endl;\n\n    return 0;\n}\n```\n\nWynik:\n\n```text\n10 / 4 = 2\n```\n\nPrzykład 2.3b – dzielenie liczb rzeczywistych:\n\n```cpp\n#include <iomanip>\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    double a = 10.0;\n    double b = 4.0;\n    double wynik = a / b;\n\n    cout << fixed << setprecision(1);\n    cout << a << \" / \" << b << \" = \" << wynik << endl;\n\n    return 0;\n}\n```\n\nWynik:\n\n```text\n10.0 / 4.0 = 2.5\n```"
        },
        {
          "id": "09-zadania",
          "title": "Zadania",
          "context": "Dzielenie całkowite i dzielenie liczb rzeczywistych",
          "kind": "tasks",
          "markdown": "1. Zmień w obu przykładach wartości na `7` i `2`. Jakie będą wyniki?\n2. Sprawdź wynik instrukcji `double wynik = 7 / 2;`, a następnie wyjaśnij, dlaczego nie jest równy `3.5`."
        },
        {
          "id": "10-jawna-konwersja-typu",
          "title": "Jawna konwersja typu",
          "context": "",
          "kind": "theory",
          "markdown": "Konwersja typu oznacza potraktowanie wartości jako wartości innego typu. Jest potrzebna między innymi wtedy, gdy przechowujemy liczby w zmiennych `int`, ale chcemy wykonać dzielenie rzeczywiste.\n\nDo jawnej konwersji używamy zapisu `static_cast<typ>(wartość)`:\n\n`static_cast<double>(a)`\n\nKonwersja tworzy wartość innego typu na potrzeby danego wyrażenia. Nie zmienia typu ani wartości zmiennej `a`.\n\nPrzykład 2.4 – jawna konwersja przed dzieleniem:\n\n```cpp\n#include <iomanip>\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a = 5;\n    int b = 10;\n\n    double bez_konwersji = a / b;\n    double z_konwersja = static_cast<double>(a) / b;\n\n    cout << fixed << setprecision(1);\n    cout << \"Bez konwersji: \" << bez_konwersji << endl;\n    cout << \"Z konwersja: \" << z_konwersja << endl;\n\n    return 0;\n}\n```\n\nWynik:\n\n```text\nBez konwersji: 0.0\nZ konwersja: 0.5\n```\n\nPo konwersji zmiennej `a` drugi argument dzielenia także zostaje potraktowany jak liczba rzeczywista."
        },
        {
          "id": "11-zadania",
          "title": "Zadania",
          "context": "Jawna konwersja typu",
          "kind": "tasks",
          "markdown": "1. Zmień wartości zmiennych na `a = 3` i `b = 2`. Przewidź oba wyniki."
        },
        {
          "id": "12-niejawna-konwersja-typu",
          "title": "Niejawna konwersja typu",
          "context": "",
          "kind": "theory",
          "markdown": "Kompilator może sam zmienić typ wartości, jeżeli wymaga tego działanie lub przypisanie. Nazywamy to konwersją niejawną.\n\nW działaniu zawierającym `int` i `double` wartość `int` zostaje zamieniona na `double`. Dzięki temu wynik także jest typu `double`.\n\nPrzypisanie liczby rzeczywistej do zmiennej `int` powoduje odrzucenie części ułamkowej. Nie jest to zaokrąglenie. Na przykład po wykonaniu `int liczba = 4.9;` zmienna `liczba` przechowuje `4`.\n\nPrzykład 2.5 – konwersje niejawne:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int liczba_calkowita = 5;\n    double liczba_rzeczywista = 2.0;\n\n    double iloraz = liczba_calkowita / liczba_rzeczywista;\n\n    double temperatura = 21.9;\n    int temperatura_calkowita = temperatura;\n\n    cout << \"Iloraz: \" << iloraz << endl;\n    cout << \"Po zapisaniu w int: \" << temperatura_calkowita << endl;\n\n    return 0;\n}\n```\n\nWynik:\n\n```text\nIloraz: 2.5\nPo zapisaniu w int: 21\n```\n\nKonwersja do typu przechowującego mniej informacji może spowodować utratę części wartości. Dlatego zawsze trzeba zwracać uwagę na typ wyniku i typ zmiennej po lewej stronie przypisania."
        },
        {
          "id": "13-zadania",
          "title": "Zadania",
          "context": "Niejawna konwersja typu",
          "kind": "tasks",
          "markdown": "1. Zmień wartość `temperatura` na `-3.8`. Jaka liczba zostanie zapisana w zmiennej typu `int`?\n2. Zmień typ zmiennej `liczba_rzeczywista` na `int`. Jak zmieni się wynik dzielenia?"
        },
        {
          "id": "14-skrocone-operatory-przypisania",
          "title": "Skrócone operatory przypisania",
          "context": "",
          "kind": "theory",
          "markdown": "Jeżeli zmienna występuje po obu stronach przypisania, zapis można skrócić:\n\n| Zapis skrócony | Zapis pełny |\n|---|---|\n| `x += 2` | `x = x + 2` |\n| `x -= 2` | `x = x - 2` |\n| `x *= 2` | `x = x * 2` |\n| `x /= 2` | `x = x / 2` |\n| `x %= 2` | `x = x % 2` |\n\nPrzykład – skrócone przypisania:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int x = 10;\n\n    x += 5;\n    cout << \"Po += 5: \" << x << endl;\n\n    x -= 3;\n    cout << \"Po -= 3: \" << x << endl;\n\n    x *= 2;\n    cout << \"Po *= 2: \" << x << endl;\n\n    x /= 4;\n    cout << \"Po /= 4: \" << x << endl;\n\n    x %= 3;\n    cout << \"Po %= 3: \" << x << endl;\n\n    return 0;\n}\n```\n\nWynik:\n\n```text\nPo += 5: 15\nPo -= 3: 12\nPo *= 2: 24\nPo /= 4: 6\nPo %= 3: 0\n```\n\nKażda instrukcja korzysta z wartości pozostawionej przez poprzednią instrukcję."
        },
        {
          "id": "15-zadania",
          "title": "Zadania",
          "context": "Skrócone operatory przypisania",
          "kind": "tasks",
          "markdown": "1. Zastąp skrócone przypisania ich pełnymi odpowiednikami i sprawdź, czy program wyświetla te same wyniki."
        },
        {
          "id": "16-inkrementacja-i-dekrementacja",
          "title": "Inkrementacja i dekrementacja",
          "context": "",
          "kind": "theory",
          "markdown": "Operator `++` zwiększa zmienną o `1`. Operator `--` zmniejsza ją o `1`.\n\n| Zapis | Nazwa | Moment zmiany |\n|---|---|---|\n| `++x` | preinkrementacja | najpierw zwiększa `x`, potem udostępnia nową wartość |\n| `x++` | postinkrementacja | najpierw udostępnia starą wartość, potem zwiększa `x` |\n| `--x` | predekrementacja | najpierw zmniejsza `x`, potem udostępnia nową wartość |\n| `x--` | postdekrementacja | najpierw udostępnia starą wartość, potem zmniejsza `x` |\n\nJeżeli inkrementacja albo dekrementacja jest osobną instrukcją, na przykład `x++;`, oba warianty prowadzą do takiego samego wyniku końcowego. Różnica jest widoczna, gdy operator znajduje się wewnątrz większego wyrażenia.\n\nPrzykład 2.6a – preinkrementacja:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a = 2;\n    int b = ++a;\n\n    cout << \"a = \" << a << endl;\n    cout << \"b = \" << b << endl;\n\n    return 0;\n}\n```\n\nWynik:\n\n```text\na = 3\nb = 3\n```\n\nPrzykład 2.6b – postinkrementacja:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a = 2;\n    int b = a++;\n\n    cout << \"a = \" << a << endl;\n    cout << \"b = \" << b << endl;\n\n    return 0;\n}\n```\n\nWynik:\n\n```text\na = 3\nb = 2\n```\n\nW pierwszym programie `a` jest zwiększane przed przypisaniem wartości do `b`. W drugim programie do `b` trafia stara wartość `a`, a dopiero później `a` zostaje zwiększone."
        },
        {
          "id": "17-zadania",
          "title": "Zadania",
          "context": "Inkrementacja i dekrementacja",
          "kind": "tasks",
          "markdown": "1. Zmień w obu przykładach inkrementację na dekrementację i przewidź wyniki.\n2. Sprawdź, jaki będzie wynik instrukcji `int b = ++a + 10;` dla `a = 2`."
        },
        {
          "id": "18-obliczenia-bez-dodatkowej-zmiennej-wynikowej",
          "title": "Obliczenia bez dodatkowej zmiennej wynikowej",
          "context": "",
          "kind": "theory",
          "markdown": "Wynik działania można obliczyć bezpośrednio podczas wyświetlania. W takim przypadku najpierw obliczane jest wyrażenie, a później jego wartość trafia do `cout`.\n\nPrzykład 2.7 – suma dwóch wczytanych liczb:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int x = 0;\n    int y = 0;\n\n    cout << \"Podaj x i y: \";\n    cin >> x >> y;\n\n    cout << \"Suma x + y = \" << x + y << endl;\n\n    return 0;\n}\n```"
        },
        {
          "id": "19-zadania",
          "title": "Zadania",
          "context": "Obliczenia bez dodatkowej zmiennej wynikowej",
          "kind": "tasks",
          "markdown": "1. Dodaj wyświetlenie różnicy i iloczynu wczytanych liczb."
        },
        {
          "id": "20-przeliczanie-jednostek",
          "title": "Przeliczanie jednostek",
          "context": "",
          "kind": "theory",
          "markdown": "Operatory arytmetyczne często służą do przeliczania jednostek. Jeden cal ma `2.54` centymetra, dlatego liczbę cali mnożymy przez `2.54`.\n\nPrzykład 2.8 – zamiana cali na centymetry:\n\n```cpp\n#include <iomanip>\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    double cale = 0.0;\n\n    cout << \"Podaj liczbe cali: \";\n    cin >> cale;\n\n    cout << fixed << setprecision(2);\n    cout << \"Centymetry: \" << cale * 2.54 << endl;\n\n    return 0;\n}\n```"
        },
        {
          "id": "21-zadania",
          "title": "Zadania",
          "context": "Przeliczanie jednostek",
          "kind": "tasks",
          "markdown": "1. Zmień program tak, aby przeliczał centymetry na cale.\n2. Zapisz wynik w osobnej zmiennej i wyświetl go z dokładnością do trzech miejsc po kropce."
        },
        {
          "id": "22-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Napisz program, który wczyta trzy liczby całkowite, a następnie wyświetli:\n   - sumę wszystkich trzech liczb;\n   - różnicę pierwszej i drugiej liczby;\n   - iloczyn pierwszej i trzeciej liczby;\n   - iloraz trzeciej i drugiej liczby.\n\n   Załóż, że druga liczba jest różna od zera.\n\n2. Napisz program obliczający średnią pięciu ocen. Oceny wczytaj do pięciu zmiennych typu `double`. Wynik wyświetl z dokładnością do dwóch miejsc po kropce.\n\n3. Napisz kalkulator dwóch liczb rzeczywistych. Program ma wczytać dwie liczby i wyświetlić ich sumę, różnicę, iloczyn oraz iloraz. Załóż, że druga liczba jest różna od zera.\n\n4. Napisz program, który wczyta liczbę sekund i obliczy, ile zawiera ona pełnych minut oraz ile sekund pozostaje. Użyj operatorów `/` i `%`.\n\nPrzed oddaniem każdego programu sprawdź, czy:\n\n- wszystkie zmienne mają odpowiednie typy i wartości początkowe;\n- kolejność działań jest jednoznaczna;\n- program nie wykonuje dzielenia przez zero;\n- wynik dzielenia ma oczekiwany typ;\n- kod kompiluje się bez błędów."
        }
      ]
    },
    {
      "number": 3,
      "id": "lekcja-03",
      "kind": "lesson",
      "title": "instrukcje warunkowe i operatory logiczne",
      "sourceFile": "03_instrukcje_warunkowe_i_operatory_logiczne.md",
      "checksum": "7fae398fb734",
      "sections": [
        {
          "id": "01-wartosci-logiczne",
          "title": "Wartości logiczne",
          "context": "",
          "kind": "theory",
          "markdown": "Program często musi podjąć decyzję na podstawie danych. Do zapisywania wyniku takiej decyzji służy typ `bool`. Zmienna tego typu może przechowywać jedną z dwóch wartości:\n\n- `true` – prawda;\n- `false` – fałsz.\n\nWyrażenie logiczne jest działaniem, którego wynikiem jest `true` albo `false`. Przykładem jest porównanie `wiek >= 18`."
        },
        {
          "id": "02-operatory-relacji",
          "title": "Operatory relacji",
          "context": "",
          "kind": "theory",
          "markdown": "Operatory relacji porównują dwie wartości:\n\n| Operator | Znaczenie | Przykład |\n|---|---|---|\n| `==` | równe | `a == b` |\n| `!=` | różne | `a != b` |\n| `<` | mniejsze | `a < b` |\n| `>` | większe | `a > b` |\n| `<=` | mniejsze lub równe | `a <= b` |\n| `>=` | większe lub równe | `a >= b` |\n\nOperator `==` porównuje wartości, natomiast `=` przypisuje wartość. Są to dwa różne działania.\n\n```cpp\nint a = 5;\nbool wynik = (a == 5);\n```\n\nPo wykonaniu tego kodu zmienna `wynik` przechowuje `true`."
        },
        {
          "id": "03-instrukcja-if",
          "title": "Instrukcja `if`",
          "context": "",
          "kind": "theory",
          "markdown": "Instrukcja `if` wykonuje kod tylko wtedy, gdy warunek jest prawdziwy:\n\n```cpp\nif (warunek)\n{\n    instrukcje;\n}\n```\n\nKlamry wyznaczają blok kodu należący do instrukcji warunkowej. Warto ich używać nawet wtedy, gdy blok zawiera tylko jedną instrukcję. Dzięki temu kod jest czytelniejszy i łatwiejszy do bezpiecznej rozbudowy."
        },
        {
          "id": "04-instrukcja-else",
          "title": "Instrukcja `else`",
          "context": "",
          "kind": "theory",
          "markdown": "Blok `else` jest wykonywany, gdy warunek w `if` jest fałszywy:\n\n```cpp\nif (warunek)\n{\n    instrukcje_dla_prawdy;\n}\nelse\n{\n    instrukcje_dla_falszu;\n}\n```\n\nPrzykład 3.0 – porównanie dwóch liczb:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a = 0;\n    int b = 0;\n\n    cout << \"Podaj dwie liczby: \";\n    cin >> a >> b;\n\n    if (a == b)\n    {\n        cout << \"Liczby sa rowne.\" << endl;\n    }\n    else\n    {\n        cout << \"Liczby sa rozne.\" << endl;\n    }\n\n    return 0;\n}\n```\n\nPrzykładowe wyniki:\n\n```text\nPodaj dwie liczby: 3 2\nLiczby sa rozne.\n```\n\n```text\nPodaj dwie liczby: 3 3\nLiczby sa rowne.\n```\n\nTylko jeden z dwóch bloków zostanie wykonany."
        },
        {
          "id": "05-zadania",
          "title": "Zadania",
          "context": "Instrukcja `else`",
          "kind": "tasks",
          "markdown": "1. Rozszerz program tak, aby dla różnych liczb informował, która z nich jest większa.\n2. Zmień warunek tak, aby program sprawdzał, czy liczby są różne."
        },
        {
          "id": "06-kilka-mozliwych-przypadkow",
          "title": "Kilka możliwych przypadków",
          "context": "",
          "kind": "theory",
          "markdown": "Gdy możliwości jest więcej, stosujemy `else if`. Warunki są sprawdzane od góry. Po znalezieniu pierwszego prawdziwego warunku pozostałe gałęzie są pomijane.\n\nPrzykład – określenie znaku liczby:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int liczba = 0;\n\n    cout << \"Podaj liczbe: \";\n    cin >> liczba;\n\n    if (liczba > 0)\n    {\n        cout << \"Liczba jest dodatnia.\" << endl;\n    }\n    else if (liczba < 0)\n    {\n        cout << \"Liczba jest ujemna.\" << endl;\n    }\n    else\n    {\n        cout << \"Liczba jest rowna zero.\" << endl;\n    }\n\n    return 0;\n}\n```\n\nKolejność warunków ma znaczenie. Pierwszy pasujący blok kończy sprawdzanie całego łańcucha."
        },
        {
          "id": "07-zadania",
          "title": "Zadania",
          "context": "Kilka możliwych przypadków",
          "kind": "tasks",
          "markdown": "1. Zmień program tak, aby klasyfikował temperaturę jako dodatnią, ujemną albo równą zero."
        },
        {
          "id": "08-operatory-logiczne",
          "title": "Operatory logiczne",
          "context": "",
          "kind": "theory",
          "markdown": "Operatory logiczne pozwalają łączyć lub odwracać warunki:\n\n| Operator | Nazwa | Kiedy wynik jest prawdziwy |\n|---|---|---|\n| `&&` | logiczne „i” | oba warunki są prawdziwe |\n| `||` | logiczne „lub” | co najmniej jeden warunek jest prawdziwy |\n| `!` | logiczne „nie” | podany warunek jest fałszywy |\n\nDziałanie `&&`:\n\n| Pierwszy warunek | Drugi warunek | Wynik |\n|---|---|---|\n| `false` | `false` | `false` |\n| `false` | `true` | `false` |\n| `true` | `false` | `false` |\n| `true` | `true` | `true` |\n\nDziałanie `||`:\n\n| Pierwszy warunek | Drugi warunek | Wynik |\n|---|---|---|\n| `false` | `false` | `false` |\n| `false` | `true` | `true` |\n| `true` | `false` | `true` |\n| `true` | `true` | `true` |\n\nOperator `!` zmienia `true` na `false`, a `false` na `true`."
        },
        {
          "id": "09-sprawdzanie-przedzia-u",
          "title": "Sprawdzanie przedziału",
          "context": "",
          "kind": "theory",
          "markdown": "Matematycznego zapisu `10 <= liczba <= 20` nie zapisujemy w ten sam sposób w programie. Trzeba utworzyć dwa pełne porównania i połączyć je operatorem `&&`:\n\n`liczba >= 10 && liczba <= 20`\n\nPrzykład – sprawdzanie przedziału:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int liczba = 0;\n\n    cout << \"Podaj liczbe: \";\n    cin >> liczba;\n\n    if (liczba >= 10 && liczba <= 20)\n    {\n        cout << \"Liczba nalezy do przedzialu od 10 do 20.\" << endl;\n    }\n    else\n    {\n        cout << \"Liczba nie nalezy do tego przedzialu.\" << endl;\n    }\n\n    return 0;\n}\n```\n\nWartości `10` i `20` należą do sprawdzanego przedziału, ponieważ użyto operatorów `>=` i `<=`."
        },
        {
          "id": "10-zadania",
          "title": "Zadania",
          "context": "Sprawdzanie przedziału",
          "kind": "tasks",
          "markdown": "1. Zmień warunek tak, aby program sprawdzał przedział od `-5` do `5` bez jego końców.\n2. Napisz warunek sprawdzający, czy liczba jest mniejsza od `0` lub większa od `100`."
        },
        {
          "id": "11-kolejnosc-i-krotkie-obliczanie-warunkow",
          "title": "Kolejność i krótkie obliczanie warunków",
          "context": "",
          "kind": "theory",
          "markdown": "Operator `!` ma wyższy priorytet niż `&&`, a `&&` ma wyższy priorytet niż `||`. Dla czytelności złożonych warunków warto jednak stosować nawiasy:\n\n`(wiek >= 18 && ma_bilet) || jest_opiekunem`\n\nWarunki połączone przez `&&` i `||` są sprawdzane od lewej strony. Program kończy sprawdzanie, gdy zna już wynik:\n\n- dla `&&` drugi warunek nie jest sprawdzany, jeśli pierwszy jest fałszywy;\n- dla `||` drugi warunek nie jest sprawdzany, jeśli pierwszy jest prawdziwy.\n\nPozwala to między innymi bezpiecznie sprawdzić dzielenie:\n\n`dzielnik != 0 && liczba % dzielnik == 0`\n\nDruga część zostanie sprawdzona tylko wtedy, gdy dzielnik jest różny od zera.\n\nPrzykład – sprawdzanie podzielności:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int liczba = 0;\n    int dzielnik = 0;\n\n    cout << \"Podaj liczbe i dzielnik: \";\n    cin >> liczba >> dzielnik;\n\n    if (dzielnik != 0 && liczba % dzielnik == 0)\n    {\n        cout << \"Liczba jest podzielna przez dzielnik.\" << endl;\n    }\n    else\n    {\n        cout << \"Liczba nie jest podzielna albo dzielnik jest zerem.\" << endl;\n    }\n\n    return 0;\n}\n```"
        },
        {
          "id": "12-zadania",
          "title": "Zadania",
          "context": "Kolejność i krótkie obliczanie warunków",
          "kind": "tasks",
          "markdown": "1. Zmień program tak, aby osobno informował o zerowym dzielniku i o braku podzielności."
        },
        {
          "id": "13-zagniezdzone-instrukcje-warunkowe",
          "title": "Zagnieżdżone instrukcje warunkowe",
          "context": "",
          "kind": "theory",
          "markdown": "Wewnątrz jednego bloku `if` można umieścić kolejną instrukcję warunkową. Nazywamy to zagnieżdżeniem.\n\n```cpp\nif (wiek >= 18)\n{\n    if (ma_bilet)\n    {\n        cout << \"Mozesz wejsc.\" << endl;\n    }\n}\n```\n\nJeżeli ten sam warunek można czytelnie zapisać za pomocą `&&`, zwykle krótszy będzie zapis `wiek >= 18 && ma_bilet`. Zagnieżdżenie przydaje się wtedy, gdy dla pierwszego warunku trzeba wykonać także inne instrukcje."
        },
        {
          "id": "14-operator-trojargumentowy",
          "title": "Operator trójargumentowy",
          "context": "",
          "kind": "theory",
          "markdown": "Operator trójargumentowy wybiera jedną z dwóch wartości:\n\n`warunek ? wartosc_gdy_prawda : wartosc_gdy_falsz`\n\nNajlepiej używać go do krótkiego wyboru wartości. Rozbudowane decyzje są czytelniejsze jako `if` i `else`.\n\nPrzykład 3.1 – wybór komunikatu:\n\n```cpp\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main()\n{\n    int a = 0;\n    int b = 0;\n\n    cout << \"Podaj dwie liczby: \";\n    cin >> a >> b;\n\n    string komunikat = (a == b) ? \"Liczby sa rowne.\" : \"Liczby sa rozne.\";\n    cout << komunikat << endl;\n\n    return 0;\n}\n```\n\nPrzykład 3.2 – wybór większej liczby:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a = 0;\n    int b = 0;\n\n    cout << \"Podaj dwie liczby: \";\n    cin >> a >> b;\n\n    int wieksza = (a > b) ? a : b;\n    cout << \"Wieksza wartosc: \" << wieksza << endl;\n\n    return 0;\n}\n```\n\nJeżeli liczby są równe, do zmiennej `wieksza` trafi wartość `b`. Wartość ta jest jednak taka sama jak `a`."
        },
        {
          "id": "15-zadania",
          "title": "Zadania",
          "context": "Operator trójargumentowy",
          "kind": "tasks",
          "markdown": "1. Zmień przykład 3.2 tak, aby wybierał mniejszą liczbę.\n2. Za pomocą operatora trójargumentowego zapisz w zmiennej `parzystosc` napis `\"parzysta\"` albo `\"nieparzysta\"`."
        },
        {
          "id": "16-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Napisz program, który wczyta dwie liczby całkowite i wyświetli:\n   - większą liczbę;\n   - mniejszą liczbę;\n   - relację pomiędzy liczbami, na przykład `3 < 4`, `5 == 5` albo `5 > 1`.\n\n2. Napisz kalkulator. Użytkownik podaje dwie liczby całkowite oraz znak działania: `+`, `-`, `*`, `/` albo `%`. Program wykonuje wybrane działanie. Dla dzielenia i modulo obsłuż przypadek, w którym druga liczba jest zerem.\n\n3. Napisz program, który wczyta dwie liczby całkowite i sprawdzi, czy pierwsza jest podzielna przez drugą. Program nie może wykonywać dzielenia przez zero.\n\n4. Napisz program, który wczyta pięć ocen, obliczy ich średnią oraz poda liczbę ocen niedostatecznych. Na tym etapie użyj pięciu osobnych zmiennych.\n\nPrzed oddaniem każdego programu sprawdź, czy:\n\n- operator `==` nie został pomylony z `=`;\n- każdy możliwy przypadek otrzymuje odpowiedni komunikat;\n- warunki brzegowe, takie jak końce przedziału i dzielenie przez zero, są obsłużone;\n- złożone warunki są czytelne;\n- kod kompiluje się bez błędów."
        }
      ]
    },
    {
      "number": 4,
      "id": "lekcja-04",
      "kind": "lesson",
      "title": "pętle",
      "sourceFile": "04_petle.md",
      "checksum": "42170d71a6e6",
      "sections": [
        {
          "id": "01-do-czego-s-uzy-petla",
          "title": "Do czego służy pętla",
          "context": "",
          "kind": "theory",
          "markdown": "Pętla pozwala wykonać ten sam fragment kodu wiele razy. Jedno wykonanie bloku pętli nazywamy iteracją albo przebiegiem.\n\nBez pętli wyświetlenie liczb od `1` do `100` wymagałoby zapisania stu podobnych instrukcji. Pętla pozwala opisać tę czynność kilkoma liniami kodu.\n\nW tej lekcji poznamy trzy rodzaje pętli:\n\n- `for` – używaną najczęściej wtedy, gdy znamy liczbę powtórzeń;\n- `while` – wykonującą kod tak długo, jak długo warunek jest prawdziwy;\n- `do...while` – podobną do `while`, ale wykonującą blok co najmniej raz."
        },
        {
          "id": "02-petla-for",
          "title": "Pętla `for`",
          "context": "",
          "kind": "theory",
          "markdown": "Najczęstsza postać pętli `for` wygląda następująco:\n\n```cpp\nfor (inicjalizacja; warunek; zmiana)\n{\n    instrukcje;\n}\n```\n\nPoszczególne części mają następujące znaczenie:\n\n1. `inicjalizacja` wykonuje się jeden raz przed rozpoczęciem pętli;\n2. `warunek` jest sprawdzany przed każdą iteracją;\n3. jeżeli warunek jest prawdziwy, wykonywany jest blok pętli;\n4. `zmiana` wykonuje się po każdej iteracji;\n5. program ponownie sprawdza warunek.\n\nTypowy zapis:\n\n```cpp\nfor (int i = 1; i <= 10; i++)\n{\n    instrukcje;\n}\n```\n\nZmienna `i` jest zmienną sterującą. Rozpoczyna od `1`, po każdej iteracji zwiększa się o `1`, a pętla działa tak długo, jak długo `i <= 10`.\n\nZmienna zadeklarowana w nagłówku pętli istnieje tylko wewnątrz tej pętli.\n\nPrzykład 4.0 – wyświetlenie liczb od 1 do 10:\n\n```cpp\n#include <iomanip>\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    for (int i = 1; i <= 10; i++)\n    {\n        cout << setw(3) << i;\n    }\n\n    cout << endl;\n    return 0;\n}\n```\n\nWynik:\n\n```text\n  1  2  3  4  5  6  7  8  9 10\n```\n\nWarunek `i <= 10` powoduje, że wartość `10` zostanie jeszcze wyświetlona. Po zwiększeniu `i` do `11` warunek stanie się fałszywy i pętla się zakończy."
        },
        {
          "id": "03-zadania",
          "title": "Zadania",
          "context": "Pętla `for`",
          "kind": "tasks",
          "markdown": "1. Zmień pętlę tak, aby wyświetlała liczby od `0` do `20` co `2`.\n2. Zmień pętlę tak, aby wyświetlała liczby od `10` do `1`."
        },
        {
          "id": "04-zakres-podany-przez-uzytkownika",
          "title": "Zakres podany przez użytkownika",
          "context": "",
          "kind": "theory",
          "markdown": "Wartość początkowa i końcowa pętli mogą pochodzić ze zmiennych. Dzięki temu liczba iteracji nie musi być znana podczas pisania programu.\n\nPrzykład 4.1 – liczby z podanego przedziału:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int poczatek = 0;\n    int koniec = 0;\n\n    cout << \"Podaj poczatek przedzialu: \";\n    cin >> poczatek;\n\n    cout << \"Podaj koniec przedzialu: \";\n    cin >> koniec;\n\n    cout << \"Liczby w przedziale: \";\n\n    for (int i = poczatek; i <= koniec; i++)\n    {\n        cout << i << ' ';\n    }\n\n    cout << endl;\n    return 0;\n}\n```\n\nPrzykładowy wynik:\n\n```text\nPodaj poczatek przedzialu: 35\nPodaj koniec przedzialu: 40\nLiczby w przedziale: 35 36 37 38 39 40\n```\n\nJeżeli początek będzie większy od końca, warunek pętli od razu będzie fałszywy i nie zostanie wykonana ani jedna iteracja."
        },
        {
          "id": "05-zadania",
          "title": "Zadania",
          "context": "Zakres podany przez użytkownika",
          "kind": "tasks",
          "markdown": "1. Rozbuduj program tak, aby dla początku większego od końca wyświetlał liczby malejąco."
        },
        {
          "id": "06-wykonywanie-obliczen-w-petli",
          "title": "Wykonywanie obliczeń w pętli",
          "context": "",
          "kind": "theory",
          "markdown": "Pętla może nie tylko wyświetlać wartości. Może także stopniowo obliczać wynik. Zmienną przechowującą taki wynik nazywamy akumulatorem.\n\nPrzykład – suma liczb od 1 do podanej wartości:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int n = 0;\n    int suma = 0;\n\n    cout << \"Podaj dodatnia liczbe n: \";\n    cin >> n;\n\n    for (int i = 1; i <= n; i++)\n    {\n        suma += i;\n    }\n\n    cout << \"Suma: \" << suma << endl;\n    return 0;\n}\n```\n\nZmienna `suma` musi rozpocząć od `0`. W każdej iteracji jest do niej dodawana aktualna wartość `i`."
        },
        {
          "id": "07-zadania",
          "title": "Zadania",
          "context": "Wykonywanie obliczeń w pętli",
          "kind": "tasks",
          "markdown": "1. Zmień program tak, aby obliczał iloczyn liczb od `1` do `n`. Jaką wartość początkową powinien mieć akumulator?"
        },
        {
          "id": "08-petla-while",
          "title": "Pętla `while`",
          "context": "",
          "kind": "theory",
          "markdown": "Pętla `while` sprawdza warunek przed każdą iteracją:\n\n```cpp\nwhile (warunek)\n{\n    instrukcje;\n}\n```\n\nJeżeli warunek od początku jest fałszywy, blok pętli nie wykona się ani razu. Wewnątrz pętli musi wydarzyć się coś, co pozwoli kiedyś zakończyć jej działanie.\n\nPrzykład 4.2 – wczytywanie znaku aż do podania litery `a`:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    char znak = ' ';\n\n    cout << \"Podaj litere a, aby zakonczyc: \";\n    cin >> znak;\n\n    while (znak != 'a')\n    {\n        cout << \"To nie jest litera a. Sprobuj ponownie: \";\n        cin >> znak;\n    }\n\n    cout << \"Koniec programu.\" << endl;\n    return 0;\n}\n```\n\nWarunek jest sprawdzany po pierwszym wczytaniu znaku. Jeżeli użytkownik od razu poda `a`, blok pętli nie zostanie wykonany."
        },
        {
          "id": "09-zadania",
          "title": "Zadania",
          "context": "Pętla `while`",
          "kind": "tasks",
          "markdown": "1. Zmień warunek tak, aby pętlę kończyła mała lub wielka litera `a`."
        },
        {
          "id": "10-petla-do-while",
          "title": "Pętla `do...while`",
          "context": "",
          "kind": "theory",
          "markdown": "Pętla `do...while` sprawdza warunek dopiero po wykonaniu bloku:\n\n```cpp\ndo\n{\n    instrukcje;\n}\nwhile (warunek);\n```\n\nBlok zawsze wykona się co najmniej raz. Po nawiasie z warunkiem trzeba umieścić średnik.\n\nPrzykład 4.3 – wczytywanie znaku za pomocą `do...while`:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    char znak = ' ';\n\n    do\n    {\n        cout << \"Podaj litere a, aby zakonczyc: \";\n        cin >> znak;\n    }\n    while (znak != 'a');\n\n    cout << \"Koniec programu.\" << endl;\n    return 0;\n}\n```\n\nW tym przykładzie komunikat i wczytywanie danych znajdują się tylko w jednym miejscu. Pętla nadaje się do sytuacji, w której użytkownik musi wykonać czynność przynajmniej raz."
        },
        {
          "id": "11-zadania",
          "title": "Zadania",
          "context": "Pętla `do...while`",
          "kind": "tasks",
          "markdown": "1. Zmień program tak, aby pytał o dodatnią liczbę aż do momentu podania poprawnej wartości."
        },
        {
          "id": "12-wybor-rodzaju-petli",
          "title": "Wybór rodzaju pętli",
          "context": "",
          "kind": "theory",
          "markdown": "Najczęściej stosujemy:\n\n- `for`, gdy liczba iteracji wynika z licznika lub zakresu;\n- `while`, gdy przed pierwszą iteracją trzeba sprawdzić warunek;\n- `do...while`, gdy blok musi wykonać się przynajmniej raz.\n\nKażdą z tych pętli można zwykle zastąpić innym rodzajem, ale warto wybierać zapis najlepiej opisujący zadanie."
        },
        {
          "id": "13-petla-nieskonczona",
          "title": "Pętla nieskończona",
          "context": "",
          "kind": "theory",
          "markdown": "Pętla staje się nieskończona, gdy jej warunek nigdy nie przyjmuje wartości `false`. Może się to wydarzyć na przykład przez pominięcie zmiany licznika:\n\n```cpp\nint i = 1;\n\nwhile (i <= 10)\n{\n    cout << i << endl;\n}\n```\n\nWartość `i` cały czas wynosi `1`, dlatego warunek nigdy nie stanie się fałszywy.\n\nPętlę nieskończoną można też utworzyć celowo:\n\n```cpp\nwhile (true)\n{\n    instrukcje;\n}\n```\n\nTaka pętla musi posiadać inny sposób zakończenia, na przykład instrukcję `break`."
        },
        {
          "id": "14-instrukcja-break",
          "title": "Instrukcja `break`",
          "context": "",
          "kind": "theory",
          "markdown": "Instrukcja `break` natychmiast kończy najbliższą pętlę. Program przechodzi do pierwszej instrukcji znajdującej się za nią.\n\nPrzykład 4.4 – przerwanie pętli:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    for (int i = 1; i <= 10; i++)\n    {\n        if (i == 6)\n        {\n            break;\n        }\n\n        cout << i << ' ';\n    }\n\n    cout << endl;\n    return 0;\n}\n```\n\nWynik:\n\n```text\n1 2 3 4 5\n```"
        },
        {
          "id": "15-instrukcja-continue",
          "title": "Instrukcja `continue`",
          "context": "",
          "kind": "theory",
          "markdown": "Instrukcja `continue` pomija pozostałą część aktualnej iteracji. Pętla przechodzi do kolejnego przebiegu. W pętli `for` przed ponownym sprawdzeniem warunku wykonywana jest jeszcze część zmieniająca licznik.\n\nPrzykład 4.5 – pomijanie liczb parzystych:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    for (int i = 1; i <= 10; i++)\n    {\n        if (i % 2 == 0)\n        {\n            continue;\n        }\n\n        cout << i << ' ';\n    }\n\n    cout << endl;\n    return 0;\n}\n```\n\nWynik:\n\n```text\n1 3 5 7 9\n```\n\nInstrukcje `break` i `continue` powinny być używane wtedy, gdy upraszczają kod. Zbyt wiele miejsc przerywających normalny przebieg pętli może utrudnić jej analizę."
        },
        {
          "id": "16-zadania",
          "title": "Zadania",
          "context": "Instrukcja `continue`",
          "kind": "tasks",
          "markdown": "1. Zmień przykład 4.4 tak, aby pętla kończyła się po napotkaniu liczby `8`.\n2. Zmień przykład 4.5 tak, aby pomijał liczby podzielne przez `3`."
        },
        {
          "id": "17-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Napisz program, który wczyta liczbę `n` i obliczy sumę wszystkich liczb naturalnych mniejszych od `n`.\n\n2. Napisz program, który wczyta liczbę `n`, a następnie pobierze od użytkownika `n` liczb rzeczywistych. Program ma obliczyć ich sumę i średnią. Załóż, że `n` jest dodatnie.\n\n3. Napisz program, który wczytuje liczby całkowite aż do podania `0`. Po zakończeniu wczytywania wyświetl:\n   - największą podaną liczbę;\n   - najmniejszą podaną liczbę;\n   - sumę;\n   - średnią.\n\n   Wartość `0` kończy wczytywanie i nie należy do obliczeń. Załóż, że przed zerem zostanie podana co najmniej jedna liczba.\n\nPrzed oddaniem każdego programu sprawdź, czy:\n\n- licznik rozpoczyna od właściwej wartości;\n- warunek poprawnie określa ostatnią iterację;\n- zmiana licznika prowadzi do zakończenia pętli;\n- akumulator ma właściwą wartość początkową;\n- kod kompiluje się bez błędów."
        }
      ]
    },
    {
      "number": 5,
      "id": "lekcja-05",
      "kind": "lesson",
      "title": "instrukcja wyboru switch",
      "sourceFile": "05_instrukcja_switch.md",
      "checksum": "20c3f60fb673",
      "sections": [
        {
          "id": "01-wybor-jednej-z-wielu-mozliwosci",
          "title": "Wybór jednej z wielu możliwości",
          "context": "",
          "kind": "theory",
          "markdown": "Instrukcja `switch` pozwala wybrać jeden z wielu bloków kodu na podstawie wartości pojedynczego wyrażenia. Dobrze nadaje się do obsługi prostego menu, numeru dnia albo znaku działania matematycznego.\n\nPodstawowy schemat:\n\n```cpp\nswitch (wyrazenie)\n{\n    case wartosc_1:\n        instrukcje;\n        break;\n\n    case wartosc_2:\n        instrukcje;\n        break;\n\n    default:\n        instrukcje;\n        break;\n}\n```\n\nDziałanie instrukcji:\n\n1. program oblicza wartość wyrażenia podanego po `switch`;\n2. szuka pasującej etykiety `case`;\n3. rozpoczyna wykonywanie kodu od znalezionego miejsca;\n4. `break` kończy instrukcję `switch`;\n5. jeśli żaden `case` nie pasuje, wykonywany jest blok `default`.\n\nBlok `default` nie jest obowiązkowy, ale zwykle warto go dodać, aby obsłużyć nieprawidłową wartość."
        },
        {
          "id": "02-jakich-wartosci-mozna-uzywac",
          "title": "Jakich wartości można używać",
          "context": "",
          "kind": "theory",
          "markdown": "W `switch` najczęściej używamy wartości typu `int` albo `char`. Nie można bezpośrednio przełączać programu na podstawie wartości `double` ani `string`.\n\nEtykiety `case` muszą zawierać różne, stałe wartości:\n\n```cpp\ncase 1:\ncase 2:\ncase 'A':\n```\n\nNie można zapisać warunku takiego jak `case x > 10:`. Do sprawdzania przedziałów i złożonych warunków służy `if`.\n\nPrzykład – numer dnia tygodnia:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int dzien = 0;\n\n    cout << \"Podaj numer dnia od 1 do 3: \";\n    cin >> dzien;\n\n    switch (dzien)\n    {\n        case 1:\n            cout << \"Poniedzialek\" << endl;\n            break;\n\n        case 2:\n            cout << \"Wtorek\" << endl;\n            break;\n\n        case 3:\n            cout << \"Sroda\" << endl;\n            break;\n\n        default:\n            cout << \"Nieprawidlowy numer.\" << endl;\n            break;\n    }\n\n    return 0;\n}\n```\n\nKażdy `case` porównuje wartość zmiennej `dzien` z jedną konkretną wartością."
        },
        {
          "id": "03-zadania",
          "title": "Zadania",
          "context": "Jakich wartości można używać",
          "kind": "tasks",
          "markdown": "1. Dodaj przypadki dla dni od `4` do `7`.\n2. Zmień program tak, aby dla numeru spoza zakresu wyświetlał instrukcję podania liczby od `1` do `7`."
        },
        {
          "id": "04-rola-instrukcji-break",
          "title": "Rola instrukcji `break`",
          "context": "",
          "kind": "theory",
          "markdown": "Instrukcja `break` kończy wykonywanie `switch`. Bez niej program przejdzie do kodu kolejnego `case`, nawet jeśli jego wartość nie pasuje.\n\nNajczęściej każdy niepusty przypadek kończymy za pomocą `break`. Celowe przejście do kolejnego przypadku omówimy w dalszej części lekcji."
        },
        {
          "id": "05-menu-dzia-ajace-w-petli",
          "title": "Menu działające w pętli",
          "context": "",
          "kind": "theory",
          "markdown": "Połączenie pętli i `switch` pozwala utworzyć menu, które jest wyświetlane wielokrotnie aż do wybrania opcji zakończenia.\n\nPrzykład 5.0 – proste menu:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    bool program_dziala = true;\n\n    while (program_dziala)\n    {\n        int wybor = 0;\n\n        cout << endl;\n        cout << \"MENU\" << endl;\n        cout << \"1. Przywitaj sie\" << endl;\n        cout << \"2. Wyswietl informacje\" << endl;\n        cout << \"3. Zakoncz program\" << endl;\n        cout << \"Wybierz opcje: \";\n        cin >> wybor;\n\n        switch (wybor)\n        {\n            case 1:\n                cout << \"Czesc!\" << endl;\n                break;\n\n            case 2:\n                cout << \"To jest program z menu.\" << endl;\n                break;\n\n            case 3:\n                cout << \"Do zobaczenia!\" << endl;\n                program_dziala = false;\n                break;\n\n            default:\n                cout << \"Nie ma takiej opcji.\" << endl;\n                break;\n        }\n    }\n\n    return 0;\n}\n```\n\nPętla `while` powtarza menu. Wybranie opcji `3` zmienia wartość `program_dziala` na `false`, więc po zakończeniu bieżącej iteracji pętla przestaje działać."
        },
        {
          "id": "06-zadania",
          "title": "Zadania",
          "context": "Menu działające w pętli",
          "kind": "tasks",
          "markdown": "1. Dodaj opcję `4`, która wyświetla dowolny krótki komunikat."
        },
        {
          "id": "07-kilka-etykiet-wykonujacych-ten-sam-kod",
          "title": "Kilka etykiet wykonujących ten sam kod",
          "context": "",
          "kind": "theory",
          "markdown": "Kilka etykiet `case` może prowadzić do wspólnego bloku. Przydaje się to wtedy, gdy różne wartości mają być obsłużone tak samo.\n\nPrzykład 5.1 – dzień roboczy albo weekend:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int dzien = 0;\n\n    cout << \"Podaj numer dnia tygodnia: \";\n    cin >> dzien;\n\n    switch (dzien)\n    {\n        case 1:\n        case 2:\n        case 3:\n        case 4:\n        case 5:\n            cout << \"Dzien roboczy.\" << endl;\n            break;\n\n        case 6:\n        case 7:\n            cout << \"Weekend.\" << endl;\n            break;\n\n        default:\n            cout << \"Nieprawidlowy numer dnia.\" << endl;\n            break;\n    }\n\n    return 0;\n}\n```\n\nEtykiety od `1` do `5` nie zawierają osobnych instrukcji, dlatego wszystkie prowadzą do tego samego komunikatu."
        },
        {
          "id": "08-zadania",
          "title": "Zadania",
          "context": "Kilka etykiet wykonujących ten sam kod",
          "kind": "tasks",
          "markdown": "1. Zmień program tak, aby osobno rozpoznawał poniedziałek, dni od wtorku do piątku oraz weekend."
        },
        {
          "id": "09-celowe-przechodzenie-do-kolejnych-przypadkow",
          "title": "Celowe przechodzenie do kolejnych przypadków",
          "context": "",
          "kind": "theory",
          "markdown": "Czasami po wykonaniu jednego przypadku chcemy wykonać również kod znajdujący się poniżej. Pomijamy wtedy `break`. W C++17 zamiar ten można wyraźnie oznaczyć instrukcją `[[fallthrough]];`.\n\nPrzykład 5.2 – uprawnienia zależne od poziomu:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int poziom = 0;\n\n    cout << \"Podaj poziom od 1 do 3: \";\n    cin >> poziom;\n\n    switch (poziom)\n    {\n        case 3:\n            cout << \"Dostep do ustawien zaawansowanych.\" << endl;\n            [[fallthrough]];\n\n        case 2:\n            cout << \"Dostep do edycji danych.\" << endl;\n            [[fallthrough]];\n\n        case 1:\n            cout << \"Dostep do odczytu danych.\" << endl;\n            break;\n\n        default:\n            cout << \"Nieprawidlowy poziom.\" << endl;\n            break;\n    }\n\n    return 0;\n}\n```\n\nDla poziomu `3` program wyświetli wszystkie trzy uprawnienia. Dla poziomu `2` wyświetli uprawnienia poziomu `2` i `1`.\n\nPrzechodzenie między przypadkami powinno być celowe i czytelne. Przypadkowe pominięcie `break` jest częstym źródłem błędów."
        },
        {
          "id": "10-zadania",
          "title": "Zadania",
          "context": "Celowe przechodzenie do kolejnych przypadków",
          "kind": "tasks",
          "markdown": "1. Usuń jedno oznaczenie `[[fallthrough]];`, wstaw w jego miejsce `break` i przewidź nowy wynik dla poziomu `3`."
        },
        {
          "id": "11-zmienne-wewnatrz-case",
          "title": "Zmienne wewnątrz `case`",
          "context": "",
          "kind": "theory",
          "markdown": "Jeżeli w konkretnym przypadku chcemy utworzyć zmienną, najlepiej otoczyć jego kod dodatkowym blokiem:\n\n```cpp\ncase 1:\n{\n    int wynik = 2 + 3;\n    cout << wynik << endl;\n    break;\n}\n```\n\nKlamry ograniczają zasięg zmiennej do jednego przypadku i zapobiegają problemom z przechodzeniem między etykietami."
        },
        {
          "id": "12-switch-czy-if",
          "title": "`switch` czy `if`",
          "context": "",
          "kind": "theory",
          "markdown": "Użyj `switch`, gdy:\n\n- sprawdzasz jedną wartość;\n- porównujesz ją z kilkoma konkretnymi stałymi;\n- tworzysz menu albo reagujesz na pojedynczy znak.\n\nUżyj `if`, gdy:\n\n- sprawdzasz przedział;\n- łączysz kilka warunków za pomocą `&&` lub `||`;\n- porównujesz różne zmienne;\n- potrzebujesz warunku innego niż równość.\n\nPrzykładowo wybór działania na podstawie znaku `+`, `-`, `*`, `/` lub `%` dobrze pasuje do `switch`. Sprawdzenie, czy dzielnik jest różny od zera, nadal wymaga instrukcji `if` wewnątrz odpowiedniego przypadku."
        },
        {
          "id": "13-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Napisz kalkulator dwóch liczb całkowitych. Użytkownik podaje liczby oraz znak działania: `+`, `-`, `*`, `/` albo `%`. Do wyboru działania użyj `switch`. Dla dzielenia i modulo obsłuż zerowy dzielnik.\n\n2. Napisz kalkulator działający w pętli z menu zawierającym:\n   - zmianę pierwszej liczby;\n   - zmianę drugiej liczby;\n   - wybór działania;\n   - wyświetlenie aktualnego wyniku;\n   - zakończenie programu.\n\n3. Napisz program wyświetlający uprawnienia mieszkańca królestwa. Dostępne rangi to:\n   - poddany – może oddać hołd władcy;\n   - giermek – może wejść na dziedziniec;\n   - rycerz – może wejść do zamku i przyjąć giermka;\n   - mag – może rozmawiać z władcą;\n   - królowa – może wydawać rozkazy.\n\n   Osoba o wyższej randze ma również wszystkie uprawnienia niższych rang. Wykorzystaj celowe przechodzenie do kolejnych przypadków i oznacz je za pomocą `[[fallthrough]];`.\n\nPrzed oddaniem każdego programu sprawdź, czy:\n\n- każdy `case` ma unikalną wartość;\n- każdy przypadek kończy się `break` albo celowo przechodzi dalej;\n- `default` obsługuje nieprawidłowy wybór;\n- dzielenie i modulo nie są wykonywane dla zera;\n- kod kompiluje się bez błędów."
        }
      ]
    },
    {
      "number": 6,
      "id": "sprawdzian-06",
      "kind": "exam",
      "title": "Sprawdzian I",
      "sourceFile": "06_sprawdzian_i_lekcje_1_5.md",
      "exam": {
        "duration": "45 minut",
        "points": 20,
        "sourceScope": "materiał z lekcji 1–5",
        "topics": [
          {
            "number": 1,
            "title": "pierwszy program, zmienne oraz wejście i wyjście"
          },
          {
            "number": 2,
            "title": "operatory arytmetyczne"
          },
          {
            "number": 3,
            "title": "instrukcje warunkowe i operatory logiczne"
          },
          {
            "number": 4,
            "title": "pętle"
          },
          {
            "number": 5,
            "title": "instrukcja wyboru switch"
          }
        ]
      },
      "sections": []
    },
    {
      "number": 7,
      "id": "lekcja-07",
      "kind": "lesson",
      "title": "zasięg zmiennych, modyfikatory typów i stałe",
      "sourceFile": "07_zasieg_modyfikatory_typow_i_stale.md",
      "checksum": "177aec3bd52d",
      "sections": [
        {
          "id": "01-zasieg-zmiennej",
          "title": "Zasięg zmiennej",
          "context": "",
          "kind": "theory",
          "markdown": "Zasięg określa część programu, w której można używać danej nazwy. Zmienna utworzona wewnątrz bloku `{ }` jest zmienną lokalną i istnieje tylko w tym bloku.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int a = 10;\n\n    if (a > 0)\n    {\n        int b = 20;\n        cout << a << ' ' << b << endl;\n    }\n\n    cout << a << endl;\n    return 0;\n}\n```\n\nZmienna `a` jest dostępna do końca funkcji `main`. Zmienna `b` jest dostępna tylko wewnątrz instrukcji `if`. Próba użycia `b` po zamykającym nawiasie klamrowym spowodowałaby błąd kompilacji."
        },
        {
          "id": "02-zadania",
          "title": "Zadania",
          "context": "Zasięg zmiennej",
          "kind": "tasks",
          "markdown": "1. Utwórz wewnątrz bloku `if` zmienną `c` i wyświetl jej wartość.\n2. Spróbuj wyświetlić `c` za blokiem, przeczytaj komunikat kompilatora, a następnie usuń błędny wiersz."
        },
        {
          "id": "03-zmienne-w-petli",
          "title": "Zmienne w pętli",
          "context": "",
          "kind": "theory",
          "markdown": "Zmienna sterująca utworzona w nagłówku pętli istnieje tylko w tej pętli:\n\n```cpp\nfor (int i = 0; i < 3; i++)\n{\n    cout << i << endl;\n}\n```\n\nPo zakończeniu pętli nie można użyć nazwy `i`. Jeżeli zmienna ma być potrzebna później, należy zadeklarować ją przed pętlą."
        },
        {
          "id": "04-zadania",
          "title": "Zadania",
          "context": "Zmienne w pętli",
          "kind": "tasks",
          "markdown": "1. Zmień kod tak, aby po pętli można było wyświetlić końcową wartość zmiennej `i`."
        },
        {
          "id": "05-zmienne-globalne-i-lokalne",
          "title": "Zmienne globalne i lokalne",
          "context": "",
          "kind": "theory",
          "markdown": "Zmienna zadeklarowana poza funkcjami jest zmienną globalną. Jest dostępna od miejsca deklaracji do końca pliku. Zmiennych globalnych należy używać ostrożnie, ponieważ wiele funkcji może je zmieniać.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint licznik = 0;\n\nvoid zwiekszLicznik()\n{\n    licznik++;\n}\n\nint main()\n{\n    zwiekszLicznik();\n    zwiekszLicznik();\n    cout << licznik << endl;\n    return 0;\n}\n```\n\nProgram wyświetli `2`. Gdy można przekazać dane do funkcji i zwrócić wynik, jest to zwykle czytelniejsze niż korzystanie ze zmiennej globalnej."
        },
        {
          "id": "06-zadania",
          "title": "Zadania",
          "context": "Zmienne globalne i lokalne",
          "kind": "tasks",
          "markdown": "1. Dodaj funkcję `wyzerujLicznik`, która przypisze zmiennej globalnej wartość `0`."
        },
        {
          "id": "07-przes-anianie-nazw",
          "title": "Przesłanianie nazw",
          "context": "",
          "kind": "theory",
          "markdown": "W bloku wewnętrznym można utworzyć zmienną o takiej samej nazwie jak w bloku zewnętrznym. Nowa zmienna przesłania wtedy poprzednią:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int liczba = 5;\n    cout << liczba << endl;\n\n    {\n        int liczba = 9;\n        cout << liczba << endl;\n    }\n\n    cout << liczba << endl;\n    return 0;\n}\n```\n\nProgram wyświetli kolejno `5`, `9`, `5`. Przesłanianie jest dozwolone, ale może utrudniać czytanie kodu."
        },
        {
          "id": "08-zadania",
          "title": "Zadania",
          "context": "Przesłanianie nazw",
          "kind": "tasks",
          "markdown": "1. Przewidź wynik, a następnie uruchom program i sprawdź odpowiedź."
        },
        {
          "id": "09-modyfikatory-typow-ca-kowitych",
          "title": "Modyfikatory typów całkowitych",
          "context": "",
          "kind": "theory",
          "markdown": "Typy całkowite można opisać słowami `signed`, `unsigned`, `short` i `long`.\n\n- `signed` oznacza typ ze znakiem, który przechowuje wartości ujemne i nieujemne;\n- `unsigned` oznacza typ bez znaku, przechowujący tylko wartości nieujemne;\n- `short` oznacza typ całkowity o zakresie nie większym niż `int`;\n- `long` i `long long` służą do przechowywania większych wartości całkowitych.\n\nDokładne rozmiary typów zależą od kompilatora i platformy. Operator `sizeof` podaje rozmiar typu w bajtach, a `numeric_limits` pozwala odczytać jego zakres.\n\n```cpp\n#include <iostream>\n#include <limits>\n\nusing namespace std;\n\nint main()\n{\n    cout << \"Bajty typu int: \" << sizeof(int) << endl;\n    cout << \"Najmniejszy int: \" << numeric_limits<int>::min() << endl;\n    cout << \"Najwiekszy int: \" << numeric_limits<int>::max() << endl;\n    cout << \"Najwiekszy unsigned int: \"\n         << numeric_limits<unsigned int>::max() << endl;\n    return 0;\n}\n```\n\nNie należy odejmować od zera w typie `unsigned` z oczekiwaniem liczby ujemnej. Taki typ nie potrafi jej przechować."
        },
        {
          "id": "10-zadania",
          "title": "Zadania",
          "context": "Modyfikatory typów całkowitych",
          "kind": "tasks",
          "markdown": "1. Wyświetl rozmiar typów `short`, `long` i `long long`.\n2. Odczytaj najmniejszą i największą wartość typu `long long`."
        },
        {
          "id": "11-sta-e-const-i-constexpr",
          "title": "Stałe `const` i `constexpr`",
          "context": "",
          "kind": "theory",
          "markdown": "Stała ma nazwę, typ i wartość, której po inicjalizacji nie można zmienić.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    const double pi = 3.141592653589793;\n    double promien = 3.0;\n    double pole = pi * promien * promien;\n\n    cout << pole << endl;\n    return 0;\n}\n```\n\n`constexpr` oznacza wartość stałą znaną już podczas kompilacji. Jest odpowiednie między innymi do określania rozmiaru statycznej tablicy.\n\n```cpp\nconstexpr int liczba_dni = 7;\nint temperatury[liczba_dni] = {};\n```\n\nW prostych programach spotyka się także stałe tekstowe tworzone przez preprocesor:\n\n```cpp\n#define LICZBA_MIESIECY 12\n```\n\nTaki zapis wykonuje zastępowanie tekstu i nie określa typu. W nowych programach C++ do stałych liczbowych najczęściej wybieramy `const` albo `constexpr`."
        },
        {
          "id": "12-zadania",
          "title": "Zadania",
          "context": "Stałe `const` i `constexpr`",
          "kind": "tasks",
          "markdown": "1. Utwórz stałą `constexpr int minuty_w_godzinie = 60` i użyj jej do przeliczenia 3 godzin na minuty."
        },
        {
          "id": "13-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Napisz program, który wyświetli rozmiary w bajtach oraz zakresy typów `char`, `short`, `int`, `long` i `long long`.\n2. Napisz program obliczający obwód i pole koła. Liczbę pi zapisz jako stałą `constexpr`, a promień wczytaj od użytkownika.\n3. Napisz program z globalną zmienną `stan`. Utwórz funkcje zwiększającą i zmniejszającą jej wartość. Wywołaj obie funkcje i wyświetl wynik. Przygotuj się do wyjaśnienia, dlaczego w większym programie zmienna globalna może utrudniać kontrolowanie danych."
        }
      ]
    },
    {
      "number": 8,
      "id": "lekcja-08",
      "kind": "lesson",
      "title": "własne funkcje",
      "sourceFile": "08_wlasne_funkcje.md",
      "checksum": "2fafc2a9c223",
      "sections": [
        {
          "id": "01-po-co-tworzymy-funkcje",
          "title": "Po co tworzymy funkcje",
          "context": "",
          "kind": "theory",
          "markdown": "Funkcja jest nazwanym fragmentem programu wykonującym określone zadanie. Podział programu na funkcje ogranicza powtarzanie kodu i ułatwia jego czytanie, testowanie oraz poprawianie.\n\nDefinicja funkcji składa się z:\n\n- typu zwracanego wyniku;\n- nazwy funkcji;\n- listy parametrów w nawiasach;\n- ciała funkcji w nawiasach klamrowych.\n\n```cpp\nint dodaj(int a, int b)\n{\n    return a + b;\n}\n```\n\n`int` przed nazwą określa typ wyniku. `a` i `b` są parametrami. Instrukcja `return` kończy funkcję i zwraca wartość do miejsca wywołania."
        },
        {
          "id": "02-pierwsza-funkcja-zwracajaca-wynik",
          "title": "Pierwsza funkcja zwracająca wynik",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n\nusing namespace std;\n\nint kwadrat(int liczba)\n{\n    return liczba * liczba;\n}\n\nint main()\n{\n    int x = 5;\n    int wynik = kwadrat(x);\n\n    cout << wynik << endl;\n    cout << kwadrat(3) + kwadrat(4) << endl;\n    return 0;\n}\n```\n\nWartości przekazane podczas wywołania, na przykład `x`, `3` i `4`, nazywamy argumentami. Funkcja może być częścią większego wyrażenia."
        },
        {
          "id": "03-zadania",
          "title": "Zadania",
          "context": "Pierwsza funkcja zwracająca wynik",
          "kind": "tasks",
          "markdown": "1. Napisz funkcję `szescian`, która zwróci trzecią potęgę liczby całkowitej.\n2. Wyświetl sumę sześcianów liczb `2` i `3`."
        },
        {
          "id": "04-funkcja-ktora-nie-zwraca-wartosci",
          "title": "Funkcja, która nie zwraca wartości",
          "context": "",
          "kind": "theory",
          "markdown": "Jeżeli funkcja wykonuje czynność, ale nie zwraca wyniku, stosujemy typ `void`.\n\n```cpp\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nvoid przywitaj(string imie)\n{\n    cout << \"Czesc, \" << imie << '!' << endl;\n}\n\nint main()\n{\n    przywitaj(\"Ala\");\n    przywitaj(\"Olek\");\n    return 0;\n}\n```\n\nFunkcję `void` wywołujemy jako osobną instrukcję. Pustą listę parametrów zapisujemy jako `()`."
        },
        {
          "id": "05-zadania",
          "title": "Zadania",
          "context": "Funkcja, która nie zwraca wartości",
          "kind": "tasks",
          "markdown": "1. Zmień funkcję tak, aby dodatkowo przyjmowała liczbę i wyświetlała imię tyle razy, ile wskazuje ta liczba."
        },
        {
          "id": "06-deklaracja-czyli-prototyp-funkcji",
          "title": "Deklaracja, czyli prototyp funkcji",
          "context": "",
          "kind": "theory",
          "markdown": "Kompilator musi znać funkcję przed jej pierwszym użyciem. Definicję można umieścić nad `main` albo podać wcześniej sam prototyp, a definicję zapisać później.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\ndouble srednia(double a, double b);\n\nint main()\n{\n    cout << srednia(4.0, 7.0) << endl;\n    return 0;\n}\n\ndouble srednia(double a, double b)\n{\n    return (a + b) / 2.0;\n}\n```\n\nPrototyp kończy się średnikiem. Typ wyniku oraz typy parametrów muszą być zgodne z późniejszą definicją."
        },
        {
          "id": "07-zadania",
          "title": "Zadania",
          "context": "Deklaracja, czyli prototyp funkcji",
          "kind": "tasks",
          "markdown": "1. Dodaj prototyp i definicję funkcji `minimum`, która zwróci mniejszą z dwóch liczb całkowitych."
        },
        {
          "id": "08-parametry-przekazywane-przez-wartosc",
          "title": "Parametry przekazywane przez wartość",
          "context": "",
          "kind": "theory",
          "markdown": "Na tym etapie parametry są przekazywane przez wartość. Funkcja otrzymuje kopie argumentów. Zmiana parametru nie zmienia zmiennej w `main`.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nvoid podwoj(int liczba)\n{\n    liczba *= 2;\n    cout << \"W funkcji: \" << liczba << endl;\n}\n\nint main()\n{\n    int x = 6;\n    podwoj(x);\n    cout << \"W main: \" << x << endl;\n    return 0;\n}\n```\n\nProgram wyświetli w funkcji `12`, ale zmienna `x` nadal będzie miała wartość `6`."
        },
        {
          "id": "09-zadania",
          "title": "Zadania",
          "context": "Parametry przekazywane przez wartość",
          "kind": "tasks",
          "markdown": "1. Przewidź wynik po drugim wywołaniu `podwoj(x)`.\n2. Zmień funkcję tak, aby zwracała podwojoną wartość, i przypisz wynik do `x`."
        },
        {
          "id": "10-wiele-instrukcji-return",
          "title": "Wiele instrukcji `return`",
          "context": "",
          "kind": "theory",
          "markdown": "Funkcja może kończyć się w różnych miejscach. Każda możliwa droga przez funkcję zwracającą wynik powinna zwrócić wartość.\n\n```cpp\nint znakLiczby(int liczba)\n{\n    if (liczba > 0)\n    {\n        return 1;\n    }\n\n    if (liczba < 0)\n    {\n        return -1;\n    }\n\n    return 0;\n}\n```\n\nPo wykonaniu `return` pozostałe instrukcje tej funkcji nie są wykonywane."
        },
        {
          "id": "11-zadania",
          "title": "Zadania",
          "context": "Wiele instrukcji `return`",
          "kind": "tasks",
          "markdown": "1. Napisz funkcję `czyParzysta`, która przyjmie liczbę i zwróci wartość typu `bool`."
        },
        {
          "id": "12-lokalna-zmienna-statyczna",
          "title": "Lokalna zmienna statyczna",
          "context": "",
          "kind": "theory",
          "markdown": "Zwykła zmienna lokalna jest tworzona przy każdym wywołaniu funkcji. Zmienna lokalna oznaczona słowem `static` zachowuje wartość między wywołaniami.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nvoid pokazNumerWywolania()\n{\n    static int licznik = 0;\n    licznik++;\n    cout << licznik << endl;\n}\n\nint main()\n{\n    pokazNumerWywolania();\n    pokazNumerWywolania();\n    pokazNumerWywolania();\n    return 0;\n}\n```\n\nZmienna `licznik` ma zasięg lokalny, ale czas życia obejmujący cały czas działania programu."
        },
        {
          "id": "13-zadania",
          "title": "Zadania",
          "context": "Lokalna zmienna statyczna",
          "kind": "tasks",
          "markdown": "1. Zmień wartość początkową licznika na `10` i zwiększaj go o `2`."
        },
        {
          "id": "14-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Napisz funkcje `minimum` i `maksimum`, które przyjmują dwie liczby całkowite i zwracają odpowiedni wynik. Wczytaj dwie liczby w `main` i użyj obu funkcji.\n2. Napisz funkcję `silniaIteracyjna`, która oblicza silnię nieujemnej liczby całkowitej za pomocą pętli. Dla `0` wynikiem jest `1`.\n3. Utwórz cztery funkcje wykonujące dodawanie, odejmowanie, mnożenie i dzielenie. Zbuduj prosty kalkulator wybierający funkcję za pomocą `switch`. Nie pozwól na dzielenie przez zero.\n4. Napisz funkcję `potega`, która przyjmuje podstawę typu `double` i nieujemny wykładnik typu `int`, a następnie oblicza wynik za pomocą pętli."
        }
      ]
    },
    {
      "number": 9,
      "id": "lekcja-09",
      "kind": "lesson",
      "title": "rekurencja",
      "sourceFile": "09_rekurencja.md",
      "checksum": "57f7b4aa422f",
      "sections": [
        {
          "id": "01-czym-jest-rekurencja",
          "title": "Czym jest rekurencja",
          "context": "",
          "kind": "theory",
          "markdown": "Rekurencja zachodzi wtedy, gdy funkcja wywołuje samą siebie. Każda poprawna funkcja rekurencyjna potrzebuje dwóch elementów:\n\n- przypadku podstawowego, który kończy kolejne wywołania;\n- kroku rekurencyjnego, który upraszcza problem i wywołuje funkcję ponownie.\n\nBez osiągalnego przypadku podstawowego funkcja wywoływałaby się aż do wyczerpania pamięci stosu programu."
        },
        {
          "id": "02-odliczanie-rekurencyjne",
          "title": "Odliczanie rekurencyjne",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n\nusing namespace std;\n\nvoid odlicz(int n)\n{\n    if (n <= 0)\n    {\n        cout << \"Start!\" << endl;\n        return;\n    }\n\n    cout << n << endl;\n    odlicz(n - 1);\n}\n\nint main()\n{\n    odlicz(3);\n    return 0;\n}\n```\n\nDla `n == 0` funkcja nie wywołuje się ponownie. Dla większego `n` wyświetla liczbę i przekazuje do kolejnego wywołania wartość mniejszą o jeden."
        },
        {
          "id": "03-zadania",
          "title": "Zadania",
          "context": "Odliczanie rekurencyjne",
          "kind": "tasks",
          "markdown": "1. Zmień wywołanie na `odlicz(5)` i przewidź wynik.\n2. Zmień funkcję tak, aby po napisie `Start!` wyświetliła liczby rosnąco od `1` do wartości początkowej."
        },
        {
          "id": "04-silnia",
          "title": "Silnia",
          "context": "",
          "kind": "theory",
          "markdown": "Silnia nieujemnej liczby całkowitej jest określona następująco:\n\n- `0! = 1`;\n- `n! = n * (n - 1)!` dla `n > 0`.\n\nTen opis bezpośrednio prowadzi do funkcji rekurencyjnej:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nlong long silnia(int n)\n{\n    if (n == 0)\n    {\n        return 1;\n    }\n\n    return n * silnia(n - 1);\n}\n\nint main()\n{\n    int n = 0;\n    cout << \"Podaj nieujemna liczbe: \";\n    cin >> n;\n\n    if (n < 0)\n    {\n        cout << \"Silnia nie jest okreslona.\" << endl;\n    }\n    else\n    {\n        cout << silnia(n) << endl;\n    }\n\n    return 0;\n}\n```\n\nDla `silnia(4)` powstają wywołania `4 * silnia(3)`, `3 * silnia(2)`, `2 * silnia(1)` i `1 * silnia(0)`. Wyniki wracają w odwrotnej kolejności.\n\nTyp `long long` także ma ograniczony zakres. Silnia rośnie bardzo szybko, dlatego dla dużych danych wynik nie zmieści się w typie."
        },
        {
          "id": "05-zadania",
          "title": "Zadania",
          "context": "Silnia",
          "kind": "tasks",
          "markdown": "1. Rozpisz na kartce wszystkie wywołania funkcji dla `silnia(5)`.\n2. Zmień przypadek podstawowy tak, aby obejmował `n <= 1`."
        },
        {
          "id": "06-rekurencyjna-suma-liczb",
          "title": "Rekurencyjna suma liczb",
          "context": "",
          "kind": "theory",
          "markdown": "Sumę liczb od `1` do `n` można opisać jako `n` powiększone o sumę liczb do `n - 1`.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint sumaDo(int n)\n{\n    if (n <= 0)\n    {\n        return 0;\n    }\n\n    return n + sumaDo(n - 1);\n}\n\nint main()\n{\n    cout << sumaDo(5) << endl;\n    return 0;\n}\n```"
        },
        {
          "id": "07-zadania",
          "title": "Zadania",
          "context": "Rekurencyjna suma liczb",
          "kind": "tasks",
          "markdown": "1. Napisz na kartce wynik i kolejność wywołań dla `sumaDo(3)`.\n2. Utwórz podobną funkcję zwracającą sumę liczb parzystych od `2` do podanego parzystego `n`."
        },
        {
          "id": "08-potegowanie",
          "title": "Potęgowanie",
          "context": "",
          "kind": "theory",
          "markdown": "Dla nieujemnego wykładnika całkowitego można przyjąć:\n\n- `a^0 = 1`;\n- `a^n = a * a^(n-1)` dla `n > 0`.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\ndouble potega(double podstawa, int wykladnik)\n{\n    if (wykladnik == 0)\n    {\n        return 1.0;\n    }\n\n    return podstawa * potega(podstawa, wykladnik - 1);\n}\n\nint main()\n{\n    cout << potega(2.0, 5) << endl;\n    return 0;\n}\n```\n\nFunkcja zakłada, że wykładnik jest nieujemny. Warunki wejściowe funkcji powinny być znane osobie, która jej używa."
        },
        {
          "id": "09-zadania",
          "title": "Zadania",
          "context": "Potęgowanie",
          "kind": "tasks",
          "markdown": "1. Uzupełnij funkcję tak, aby obsługiwała wykładniki ujemne zgodnie z zależnością `a^(-n) = 1 / a^n`. Pamiętaj, że podstawa nie może wtedy być zerem."
        },
        {
          "id": "10-rekurencja-a-petla",
          "title": "Rekurencja a pętla",
          "context": "",
          "kind": "theory",
          "markdown": "Wiele prostych problemów, takich jak silnia albo suma, można rozwiązać zarówno rekurencją, jak i pętlą. Pętla zwykle zużywa mniej pamięci. Rekurencja bywa czytelniejsza, gdy problem naturalnie składa się z mniejszych problemów tego samego rodzaju.\n\nKażde wywołanie funkcji przechowuje na stosie między innymi własne parametry i miejsce powrotu. Bardzo głęboka rekurencja może przepełnić stos.\n\n```cpp\nlong long silniaIteracyjna(int n)\n{\n    long long wynik = 1;\n\n    for (int i = 2; i <= n; i++)\n    {\n        wynik *= i;\n    }\n\n    return wynik;\n}\n```"
        },
        {
          "id": "11-zadania",
          "title": "Zadania",
          "context": "Rekurencja a pętla",
          "kind": "tasks",
          "markdown": "1. Porównaj wynik wersji rekurencyjnej i iteracyjnej dla liczb od `0` do `10`."
        },
        {
          "id": "12-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Napisz rekurencyjną funkcję `potega`, która oblicza potęgę dla podanej podstawy i nieujemnego wykładnika całkowitego.\n2. Napisz rekurencyjną funkcję zwracającą `n`-ty wyraz ciągu Fibonacciego. Przyjmij `F(0) = 0`, `F(1) = 1` i przetestuj tylko małe wartości.\n3. Napisz rekurencyjną funkcję `sumaCyfr`, która dla nieujemnej liczby całkowitej zwróci sumę jej cyfr. Wykorzystaj dzielenie całkowite przez `10` i resztę z dzielenia przez `10`.\n4. Dla jednego z powyższych zadań przygotuj na kartce rozpisanie kolejnych wywołań funkcji i zwracanych wyników."
        }
      ]
    },
    {
      "number": 10,
      "id": "lekcja-10",
      "kind": "lesson",
      "title": "statyczne tablice jednowymiarowe",
      "sourceFile": "10_tablice_jednowymiarowe.md",
      "checksum": "dd15961e266d",
      "sections": [
        {
          "id": "01-czym-jest-tablica",
          "title": "Czym jest tablica",
          "context": "",
          "kind": "theory",
          "markdown": "Tablica przechowuje ustaloną liczbę elementów tego samego typu pod jedną nazwą. Elementy zajmują kolejne miejsca w pamięci i są rozróżniane za pomocą indeksów.\n\n```cpp\nconstexpr int rozmiar = 5;\nint liczby[rozmiar];\n```\n\nJest to statyczna tablica pięciu liczb całkowitych. Jej rozmiar jest ustalony podczas kompilacji i nie można go później zmienić.\n\nIndeksy zaczynają się od zera:\n\n- pierwszy element ma indeks `0`;\n- drugi element ma indeks `1`;\n- ostatni element tablicy o rozmiarze `5` ma indeks `4`."
        },
        {
          "id": "02-inicjalizacja-i-dostep-do-elementow",
          "title": "Inicjalizacja i dostęp do elementów",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int liczby[5] = {4, 7, 2, 9, 1};\n\n    cout << liczby[0] << endl;\n    cout << liczby[4] << endl;\n\n    liczby[2] = 100;\n    cout << liczby[2] << endl;\n    return 0;\n}\n```\n\nZapis `liczby[2]` oznacza trzeci element. Indeks może być także wyrażeniem albo zmienną typu całkowitego.\n\nJeśli podamy mniej wartości niż wynosi rozmiar, pozostałe elementy zostaną wyzerowane. Zapis `int liczby[5] = {};` zeruje całą tablicę. Można też pozwolić kompilatorowi ustalić rozmiar:\n\n```cpp\nint oceny[] = {5, 4, 3, 5};\n```"
        },
        {
          "id": "03-zadania",
          "title": "Zadania",
          "context": "Inicjalizacja i dostęp do elementów",
          "kind": "tasks",
          "markdown": "1. Utwórz tablicę zawierającą liczby `10`, `20`, `30` i `40`, a następnie wyświetl drugi oraz ostatni element.\n2. Zmień pierwszy element na `100` i wyświetl go ponownie."
        },
        {
          "id": "04-przechodzenie-po-tablicy",
          "title": "Przechodzenie po tablicy",
          "context": "",
          "kind": "theory",
          "markdown": "Najczęściej używamy pętli `for`. Warunek `i < rozmiar` gwarantuje, że ostatnią użytą wartością indeksu będzie `rozmiar - 1`.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    constexpr int rozmiar = 5;\n    int liczby[rozmiar] = {3, 6, 9, 12, 15};\n\n    for (int i = 0; i < rozmiar; i++)\n    {\n        cout << \"liczby[\" << i << \"] = \" << liczby[i] << endl;\n    }\n\n    return 0;\n}\n```"
        },
        {
          "id": "05-zadania",
          "title": "Zadania",
          "context": "Przechodzenie po tablicy",
          "kind": "tasks",
          "markdown": "1. Zmień pętlę tak, aby wyświetlała elementy od końca do początku.\n2. Wyświetl tylko elementy o parzystych indeksach."
        },
        {
          "id": "06-wczytywanie-elementow",
          "title": "Wczytywanie elementów",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    constexpr int rozmiar = 4;\n    int liczby[rozmiar] = {};\n\n    for (int i = 0; i < rozmiar; i++)\n    {\n        cout << \"Podaj element \" << i << \": \";\n        cin >> liczby[i];\n    }\n\n    cout << \"Wczytane liczby: \";\n\n    for (int i = 0; i < rozmiar; i++)\n    {\n        cout << liczby[i] << ' ';\n    }\n\n    cout << endl;\n    return 0;\n}\n```\n\nKażdy element tablicy zachowuje się jak osobna zmienna odpowiedniego typu. Można go wczytać, wyświetlić i użyć w obliczeniach."
        },
        {
          "id": "07-zadania",
          "title": "Zadania",
          "context": "Wczytywanie elementów",
          "kind": "tasks",
          "markdown": "1. Po wczytaniu tablicy wyświetl każdy element powiększony o `1`.\n2. Policz, ile wczytanych elementów jest dodatnich."
        },
        {
          "id": "08-suma-i-srednia",
          "title": "Suma i średnia",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    constexpr int rozmiar = 5;\n    double pomiary[rozmiar] = {2.5, 4.0, 3.5, 6.0, 4.0};\n    double suma = 0.0;\n\n    for (int i = 0; i < rozmiar; i++)\n    {\n        suma += pomiary[i];\n    }\n\n    double srednia = suma / rozmiar;\n    cout << \"Suma: \" << suma << endl;\n    cout << \"Srednia: \" << srednia << endl;\n    return 0;\n}\n```\n\nAkumulator `suma` musi zostać wyzerowany przed pętlą. Dzielenie daje wynik zmiennoprzecinkowy, ponieważ `suma` ma typ `double`."
        },
        {
          "id": "09-zadania",
          "title": "Zadania",
          "context": "Suma i średnia",
          "kind": "tasks",
          "markdown": "1. Policz, ile pomiarów jest większych od średniej."
        },
        {
          "id": "10-petla-zakresowa",
          "title": "Pętla zakresowa",
          "context": "",
          "kind": "theory",
          "markdown": "Gdy nie potrzebujemy indeksu, możemy użyć pętli zakresowej:\n\n```cpp\nint liczby[] = {2, 4, 6, 8};\n\nfor (int liczba : liczby)\n{\n    cout << liczba << endl;\n}\n```\n\nZmienna `liczba` otrzymuje kolejno kopię każdego elementu. Aby zmieniać elementy tablicy, używamy referencji:\n\n```cpp\nfor (int& liczba : liczby)\n{\n    liczba *= 2;\n}\n```\n\nReferencje zostaną dokładniej omówione w dalszej części kursu."
        },
        {
          "id": "11-zadania",
          "title": "Zadania",
          "context": "Pętla zakresowa",
          "kind": "tasks",
          "markdown": "1. Za pomocą pętli zakresowej wyświetl wszystkie elementy tablicy.\n2. Za pomocą pętli zakresowej z referencją zmień znaki wszystkich elementów na przeciwne."
        },
        {
          "id": "12-wyjscie-poza-zakres-tablicy",
          "title": "Wyjście poza zakres tablicy",
          "context": "",
          "kind": "theory",
          "markdown": "Dla tablicy o rozmiarze `5` poprawne są wyłącznie indeksy od `0` do `4`. Użycie `liczby[5]` albo `liczby[-1]` jest błędem. Program może wyświetlić przypadkową wartość, uszkodzić inne dane albo zakończyć działanie.\n\nZwykła tablica nie sprawdza automatycznie zakresu indeksu. To programista musi pilnować poprawnych granic pętli."
        },
        {
          "id": "13-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Wczytaj 10 liczb całkowitych do tablicy, a następnie wyświetl je w kolejności wczytania i w kolejności odwrotnej.\n2. Wczytaj 8 liczb. Oblicz ich sumę i średnią oraz policz, ile wartości jest większych od średniej.\n3. Wczytaj 10 liczb i wyświetl najmniejszą oraz największą z nich. Nie przyjmuj z góry żadnych wartości granicznych — rozpocznij od pierwszego elementu tablicy.\n4. Utwórz tablicę 6 liczb całkowitych. Zamień miejscami pierwszy element z ostatnim, drugi z przedostatnim i trzeci z czwartym, a następnie wyświetl tablicę."
        }
      ]
    },
    {
      "number": 11,
      "id": "lekcja-11",
      "kind": "lesson",
      "title": "algorytmy na tablicach jednowymiarowych",
      "sourceFile": "11_algorytmy_na_tablicach.md",
      "checksum": "007685764090",
      "sections": [
        {
          "id": "01-tablica-jako-argument-funkcji",
          "title": "Tablica jako argument funkcji",
          "context": "",
          "kind": "theory",
          "markdown": "Funkcja przetwarzająca tablicę powinna otrzymać osobno tablicę i liczbę jej elementów. Sam parametr tablicowy nie przekazuje informacji o rozmiarze.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nvoid wyswietl(const int tablica[], int rozmiar)\n{\n    for (int i = 0; i < rozmiar; i++)\n    {\n        cout << tablica[i] << ' ';\n    }\n\n    cout << endl;\n}\n\nint main()\n{\n    int liczby[] = {5, 8, 2, 7};\n    wyswietl(liczby, 4);\n    return 0;\n}\n```\n\nSłowo `const` przy parametrze informuje, że funkcja nie może zmieniać elementów tablicy. Jeśli funkcja ma je zmieniać, pomijamy `const`."
        },
        {
          "id": "02-zadania",
          "title": "Zadania",
          "context": "Tablica jako argument funkcji",
          "kind": "tasks",
          "markdown": "1. Napisz funkcję `wyzeruj`, która ustawi wszystkie elementy tablicy na `0`."
        },
        {
          "id": "03-obliczanie-sumy-i-sredniej-w-funkcjach",
          "title": "Obliczanie sumy i średniej w funkcjach",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n\nusing namespace std;\n\nint suma(const int tablica[], int rozmiar)\n{\n    int wynik = 0;\n\n    for (int i = 0; i < rozmiar; i++)\n    {\n        wynik += tablica[i];\n    }\n\n    return wynik;\n}\n\ndouble srednia(const int tablica[], int rozmiar)\n{\n    if (rozmiar == 0)\n    {\n        return 0.0;\n    }\n\n    return static_cast<double>(suma(tablica, rozmiar)) / rozmiar;\n}\n\nint main()\n{\n    int liczby[] = {4, 7, 3, 6};\n    cout << suma(liczby, 4) << endl;\n    cout << srednia(liczby, 4) << endl;\n    return 0;\n}\n```\n\nRzutowanie `static_cast<double>` zapobiega dzieleniu całkowitemu. Funkcja `srednia` korzysta z wcześniej napisanej funkcji `suma`."
        },
        {
          "id": "04-zadania",
          "title": "Zadania",
          "context": "Obliczanie sumy i średniej w funkcjach",
          "kind": "tasks",
          "markdown": "1. Napisz funkcję zwracającą liczbę elementów większych od średniej."
        },
        {
          "id": "05-minimum-i-maksimum",
          "title": "Minimum i maksimum",
          "context": "",
          "kind": "theory",
          "markdown": "Pierwszy element jest poprawną wartością początkową. Dzięki temu algorytm działa również wtedy, gdy wszystkie liczby są ujemne.\n\n```cpp\nint maksimum(const int tablica[], int rozmiar)\n{\n    int wynik = tablica[0];\n\n    for (int i = 1; i < rozmiar; i++)\n    {\n        if (tablica[i] > wynik)\n        {\n            wynik = tablica[i];\n        }\n    }\n\n    return wynik;\n}\n```\n\nFunkcję wolno wywołać tylko dla niepustej tablicy. Można podobnie zwrócić indeks największego elementu zamiast samej wartości."
        },
        {
          "id": "06-zadania",
          "title": "Zadania",
          "context": "Minimum i maksimum",
          "kind": "tasks",
          "markdown": "1. Napisz funkcję `minimum`.\n2. Napisz funkcję `indeksMaksimum`, która zwróci indeks pierwszego wystąpienia największej wartości."
        },
        {
          "id": "07-wyszukiwanie-liniowe",
          "title": "Wyszukiwanie liniowe",
          "context": "",
          "kind": "theory",
          "markdown": "Wyszukiwanie liniowe sprawdza elementy kolejno, aż znajdzie poszukiwaną wartość. Umówimy się, że wynik `-1` oznacza brak elementu.\n\n```cpp\nint znajdz(const int tablica[], int rozmiar, int szukana)\n{\n    for (int i = 0; i < rozmiar; i++)\n    {\n        if (tablica[i] == szukana)\n        {\n            return i;\n        }\n    }\n\n    return -1;\n}\n```\n\nPo znalezieniu elementu `return` natychmiast kończy funkcję."
        },
        {
          "id": "08-zadania",
          "title": "Zadania",
          "context": "Wyszukiwanie liniowe",
          "kind": "tasks",
          "markdown": "1. Zmień funkcję tak, aby zwracała indeks ostatniego wystąpienia szukanej wartości.\n2. Napisz funkcję liczącą wszystkie wystąpienia wskazanej liczby."
        },
        {
          "id": "09-odwracanie-tablicy",
          "title": "Odwracanie tablicy",
          "context": "",
          "kind": "theory",
          "markdown": "Wystarczy wykonać zamiany do połowy tablicy:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nvoid odwroc(int tablica[], int rozmiar)\n{\n    for (int i = 0; i < rozmiar / 2; i++)\n    {\n        int drugi_indeks = rozmiar - 1 - i;\n        int pomocnicza = tablica[i];\n        tablica[i] = tablica[drugi_indeks];\n        tablica[drugi_indeks] = pomocnicza;\n    }\n}\n\nint main()\n{\n    int liczby[] = {1, 2, 3, 4, 5};\n    odwroc(liczby, 5);\n\n    for (int liczba : liczby)\n    {\n        cout << liczba << ' ';\n    }\n\n    cout << endl;\n    return 0;\n}\n```"
        },
        {
          "id": "10-zadania",
          "title": "Zadania",
          "context": "Odwracanie tablicy",
          "kind": "tasks",
          "markdown": "1. Sprawdź działanie funkcji dla tablicy mającej parzystą liczbę elementów."
        },
        {
          "id": "11-sortowanie-babelkowe",
          "title": "Sortowanie bąbelkowe",
          "context": "",
          "kind": "theory",
          "markdown": "Sortowanie bąbelkowe wielokrotnie porównuje sąsiednie elementy i zamienia je miejscami, gdy stoją w złej kolejności.\n\n```cpp\nvoid sortuj(int tablica[], int rozmiar)\n{\n    for (int przejscie = 0; przejscie < rozmiar - 1; przejscie++)\n    {\n        bool byla_zamiana = false;\n\n        for (int i = 0; i < rozmiar - 1 - przejscie; i++)\n        {\n            if (tablica[i] > tablica[i + 1])\n            {\n                int pomocnicza = tablica[i];\n                tablica[i] = tablica[i + 1];\n                tablica[i + 1] = pomocnicza;\n                byla_zamiana = true;\n            }\n        }\n\n        if (!byla_zamiana)\n        {\n            return;\n        }\n    }\n}\n```\n\nPo każdym pełnym przejściu największy nieuporządkowany element trafia na swoje miejsce. Zmienna `byla_zamiana` pozwala skończyć wcześniej, jeśli tablica była już uporządkowana."
        },
        {
          "id": "12-zadania",
          "title": "Zadania",
          "context": "Sortowanie bąbelkowe",
          "kind": "tasks",
          "markdown": "1. Dla tablicy `{4, 2, 3, 1}` zapisz na kartce jej stan po każdym pełnym przejściu pętli zewnętrznej.\n2. Zmień porównanie tak, aby liczby zostały uporządkowane malejąco."
        },
        {
          "id": "13-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Napisz funkcję `ileNieparzystych`, która otrzyma tablicę i jej rozmiar, a następnie zwróci liczbę elementów nieparzystych. Wczytaj 10 liczb i użyj funkcji.\n2. Napisz funkcję zwracającą różnicę między największą i najmniejszą wartością w niepustej tablicy.\n3. Napisz program, który wczyta 10 liczb, uporządkuje je rosnąco za pomocą sortowania bąbelkowego i wyświetli wynik.\n4. Napisz funkcję, która przesunie wszystkie elementy tablicy o jedno miejsce w prawo. Ostatni element ma trafić na początek."
        }
      ]
    },
    {
      "number": 12,
      "id": "sprawdzian-12",
      "kind": "exam",
      "title": "Sprawdzian II",
      "sourceFile": "12_sprawdzian_ii_lekcje_1_11.md",
      "exam": {
        "duration": "45 minut",
        "points": 20,
        "sourceScope": "materiał z lekcji 1–11",
        "topics": [
          {
            "number": 7,
            "title": "zasięg zmiennych, modyfikatory typów i stałe"
          },
          {
            "number": 8,
            "title": "własne funkcje"
          },
          {
            "number": 9,
            "title": "rekurencja"
          },
          {
            "number": 10,
            "title": "statyczne tablice jednowymiarowe"
          },
          {
            "number": 11,
            "title": "algorytmy na tablicach jednowymiarowych"
          }
        ]
      },
      "sections": []
    },
    {
      "number": 13,
      "id": "lekcja-13",
      "kind": "lesson",
      "title": "napisy string i tablice znaków",
      "sourceFile": "13_napisy_string_i_tablice_znakow.md",
      "checksum": "0a6f6cf5ba10",
      "sections": [
        {
          "id": "01-napisy-typu-string",
          "title": "Napisy typu `string`",
          "context": "",
          "kind": "theory",
          "markdown": "Typ `string` służy do przechowywania tekstu. W rzeczywistości `string` jest klasą z biblioteki standardowej, a nie typem prostym. Na początku będziemy jednak korzystać z niego podobnie jak z typu prostego: tworzyć zmienne, przypisywać im wartości, porównywać je i przekazywać do funkcji.\n\nAby używać `string`, dołączamy nagłówek `<string>`.\n\n```cpp\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main()\n{\n    string imie = \"Ala\";\n    string powitanie = \"Czesc, \" + imie + \"!\";\n\n    cout << powitanie << endl;\n    return 0;\n}\n```\n\nOperator `+` łączy napisy, a operator `=` przypisuje napis do zmiennej."
        },
        {
          "id": "02-zadania",
          "title": "Zadania",
          "context": "Napisy typu `string`",
          "kind": "tasks",
          "markdown": "1. Dodaj zmienną `nazwisko` i wyświetl imię oraz nazwisko rozdzielone spacją.\n2. Zmień program tak, aby powitanie znalazło się w osobnym wierszu pod imieniem i nazwiskiem."
        },
        {
          "id": "03-wczytywanie-s-owa-i-ca-ego-wiersza",
          "title": "Wczytywanie słowa i całego wiersza",
          "context": "",
          "kind": "theory",
          "markdown": "`cin >> napis` wczytuje znaki tylko do pierwszego białego znaku, na przykład spacji. `getline(cin, napis)` wczytuje cały wiersz.\n\n```cpp\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main()\n{\n    string zdanie;\n\n    cout << \"Napisz zdanie: \";\n    getline(cin, zdanie);\n\n    cout << \"Wpisano: \" << zdanie << endl;\n    return 0;\n}\n```\n\nJeśli wcześniej użyliśmy `cin >>`, w buforze może pozostać znak końca wiersza. Przed `getline` usuwamy go za pomocą `ignore`:\n\n```cpp\n#include <iostream>\n#include <limits>\n#include <string>\n\nusing namespace std;\n\nint main()\n{\n    int wiek = 0;\n    string imie_i_nazwisko;\n\n    cout << \"Podaj wiek: \";\n    cin >> wiek;\n    cin.ignore(numeric_limits<streamsize>::max(), '\\n');\n\n    cout << \"Podaj imie i nazwisko: \";\n    getline(cin, imie_i_nazwisko);\n\n    cout << imie_i_nazwisko << \", \" << wiek << endl;\n    return 0;\n}\n```\n\nTutaj `\\n` oznacza pojedynczy znak końca wiersza, którego szukamy w buforze wejścia."
        },
        {
          "id": "04-zadania",
          "title": "Zadania",
          "context": "Wczytywanie słowa i całego wiersza",
          "kind": "tasks",
          "markdown": "1. Wczytaj tytuł książki zawierający spacje i wyświetl go w cudzysłowie."
        },
        {
          "id": "05-d-ugosc-i-indeksowanie-napisu",
          "title": "Długość i indeksowanie napisu",
          "context": "",
          "kind": "theory",
          "markdown": "Metody `size()` i `length()` zwracają liczbę znaków. Znaki mają indeksy od `0` do `size() - 1`, tak jak elementy tablicy.\n\n```cpp\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main()\n{\n    string napis = \"Komputer\";\n\n    cout << napis.size() << endl;\n    cout << napis[0] << endl;\n    cout << napis[napis.size() - 1] << endl;\n\n    napis[0] = 'k';\n    cout << napis << endl;\n    return 0;\n}\n```\n\nLitera w pojedynczym cudzysłowie, na przykład `'k'`, ma typ `char`. Tekst w podwójnym cudzysłowie, na przykład `\"kot\"`, jest napisem.\n\nPrzed użyciem pierwszego lub ostatniego znaku trzeba sprawdzić, czy napis nie jest pusty. Służy do tego metoda `empty()`."
        },
        {
          "id": "06-zadania",
          "title": "Zadania",
          "context": "Długość i indeksowanie napisu",
          "kind": "tasks",
          "markdown": "1. Wczytaj napis i wyświetl jego znaki od końca.\n2. Policz, ile razy występuje w nim litera `'a'`."
        },
        {
          "id": "07-porownywanie-napisow",
          "title": "Porównywanie napisów",
          "context": "",
          "kind": "theory",
          "markdown": "Napisy `string` można porównywać operatorami `==`, `!=`, `<`, `>` i pozostałymi operatorami relacyjnymi. Porządek wynika z kodów znaków i przypomina porządek słownikowy, ale wielkie i małe litery są różnymi znakami.\n\n```cpp\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main()\n{\n    string haslo;\n    cout << \"Podaj haslo: \";\n    cin >> haslo;\n\n    if (haslo == \"cpp17\")\n    {\n        cout << \"Dostep przyznany.\" << endl;\n    }\n    else\n    {\n        cout << \"Bledne haslo.\" << endl;\n    }\n\n    return 0;\n}\n```"
        },
        {
          "id": "08-zadania",
          "title": "Zadania",
          "context": "Porównywanie napisów",
          "kind": "tasks",
          "markdown": "1. Zmień program tak, aby użytkownik miał trzy próby podania hasła."
        },
        {
          "id": "09-przydatne-operacje-na-string",
          "title": "Przydatne operacje na `string`",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main()\n{\n    string tekst = \"programowanie\";\n\n    cout << tekst.substr(0, 7) << endl;\n    cout << tekst.find(\"gram\") << endl;\n\n    tekst += \" w C++\";\n    cout << tekst << endl;\n    return 0;\n}\n```\n\n- `substr(poczatek, liczba_znakow)` zwraca fragment napisu;\n- `find(szukany)` zwraca pozycję pierwszego wystąpienia;\n- jeśli tekstu nie znaleziono, wynikiem jest `string::npos`;\n- `+=` dopisuje tekst na końcu."
        },
        {
          "id": "10-zadania",
          "title": "Zadania",
          "context": "Przydatne operacje na `string`",
          "kind": "tasks",
          "markdown": "1. Sprawdź za pomocą `find`, czy w podanym zdaniu występuje słowo `C++`."
        },
        {
          "id": "11-tablica-znakow-zakonczona-znakiem-zerowym",
          "title": "Tablica znaków zakończona znakiem zerowym",
          "context": "",
          "kind": "theory",
          "markdown": "Tekst można też przechowywać w tablicy `char`. Na jego końcu znajduje się specjalny znak zerowy `'\\0'`, który wyznacza koniec napisu.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    char napis[] = \"Ala\";\n\n    for (int i = 0; napis[i] != '\\0'; i++)\n    {\n        cout << napis[i] << endl;\n    }\n\n    cout << \"Rozmiar tablicy: \" << sizeof(napis) << endl;\n    return 0;\n}\n```\n\nTablica ma cztery elementy: `'A'`, `'l'`, `'a'` i `'\\0'`. Dlatego `sizeof(napis)` zwróci `4`, choć widoczne są trzy litery.\n\nNagłówek `<cstring>` zawiera funkcje pracujące z takimi napisami, między innymi `strlen`, `strcmp`, `strcpy` i `strcat`.\n\n```cpp\n#include <cstring>\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    char pierwszy[20] = \"Ala\";\n    char drugi[] = \" ma kota\";\n\n    strcat(pierwszy, drugi);\n\n    cout << pierwszy << endl;\n    cout << strlen(pierwszy) << endl;\n    cout << strcmp(\"abc\", \"abc\") << endl;\n    return 0;\n}\n```\n\nTablica docelowa musi mieć miejsce na wszystkie znaki i znak `'\\0'`. Brak miejsca prowadzi do wyjścia poza zakres. W większości zwykłych programów C++ wygodniejszy i bezpieczniejszy jest `string`."
        },
        {
          "id": "12-zadania",
          "title": "Zadania",
          "context": "Tablica znaków zakończona znakiem zerowym",
          "kind": "tasks",
          "markdown": "1. Zmień tablicę `pierwszy` tak, aby była za mała, przewidź problem, ale nie uruchamiaj błędnej wersji.\n2. Za pomocą `strlen` wyświetl długość wpisanego jednowyrazowego napisu w tablicy `char` o rozmiarze `50`."
        },
        {
          "id": "13-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Wczytaj cały wiersz do zmiennej `string`. Wyświetl jego długość, pierwszy i ostatni znak oraz cały napis od końca. Poprawnie obsłuż pusty napis.\n2. Napisz funkcję `ileSamoglosek`, która przyjmie `string` i zwróci liczbę małych samogłosek `a`, `e`, `i`, `o`, `u`, `y`.\n3. Wczytaj dwa napisy `string`, połącz je ze spacją i wyświetl. Następnie sprawdź, czy napisy są jednakowe.\n4. Napisz program, który wczyta słowo do tablicy `char` o rozmiarze `100`, a następnie bez użycia `strlen` policzy jego znaki, przechodząc do `'\\0'`."
        }
      ]
    },
    {
      "number": 14,
      "id": "lekcja-14",
      "kind": "lesson",
      "title": "statyczne tablice wielowymiarowe",
      "sourceFile": "14_tablice_wielowymiarowe.md",
      "checksum": "c487aeceb59b",
      "sections": [
        {
          "id": "01-tablica-dwuwymiarowa",
          "title": "Tablica dwuwymiarowa",
          "context": "",
          "kind": "theory",
          "markdown": "Tablica dwuwymiarowa przypomina tabelę złożoną z wierszy i kolumn. Do wskazania elementu potrzebne są dwa indeksy.\n\n```cpp\nconstexpr int wiersze = 3;\nconstexpr int kolumny = 4;\nint tablica[wiersze][kolumny] = {};\n```\n\nPierwszy indeks wybiera wiersz, a drugi kolumnę. Element w pierwszym wierszu i pierwszej kolumnie ma zapis `tablica[0][0]`."
        },
        {
          "id": "02-inicjalizacja-i-dostep",
          "title": "Inicjalizacja i dostęp",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int macierz[2][3] = {\n        {1, 2, 3},\n        {4, 5, 6}\n    };\n\n    cout << macierz[0][1] << endl;\n    cout << macierz[1][2] << endl;\n\n    macierz[1][0] = 40;\n    cout << macierz[1][0] << endl;\n    return 0;\n}\n```\n\nPoprawne indeksy tej tablicy to `0`–`1` dla wierszy i `0`–`2` dla kolumn."
        },
        {
          "id": "03-zadania",
          "title": "Zadania",
          "context": "Inicjalizacja i dostęp",
          "kind": "tasks",
          "markdown": "1. Zmień wartość elementu w pierwszym wierszu i trzeciej kolumnie na `30`.\n2. Utwórz tablicę `3 × 2` i zainicjalizuj ją liczbami od `1` do `6`."
        },
        {
          "id": "04-zagniezdzone-petle",
          "title": "Zagnieżdżone pętle",
          "context": "",
          "kind": "theory",
          "markdown": "Do przejścia po wszystkich elementach używamy dwóch pętli. Pętla zewnętrzna wybiera wiersz, a wewnętrzna kolejne kolumny.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    constexpr int wiersze = 2;\n    constexpr int kolumny = 3;\n    int macierz[wiersze][kolumny] = {\n        {1, 2, 3},\n        {4, 5, 6}\n    };\n\n    for (int w = 0; w < wiersze; w++)\n    {\n        for (int k = 0; k < kolumny; k++)\n        {\n            cout << macierz[w][k] << ' ';\n        }\n\n        cout << endl;\n    }\n\n    return 0;\n}\n```\n\nKażde wykonanie pętli zewnętrznej kończy się przejściem do nowego wiersza wyjścia."
        },
        {
          "id": "05-zadania",
          "title": "Zadania",
          "context": "Zagnieżdżone pętle",
          "kind": "tasks",
          "markdown": "1. Wyświetl macierz kolumnami, czyli najpierw `1 4`, potem `2 5`, a na końcu `3 6`.\n2. Wyświetl tylko elementy parzyste."
        },
        {
          "id": "06-wczytywanie-i-suma-wszystkich-elementow",
          "title": "Wczytywanie i suma wszystkich elementów",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    constexpr int wiersze = 2;\n    constexpr int kolumny = 2;\n    int dane[wiersze][kolumny] = {};\n    int suma = 0;\n\n    for (int w = 0; w < wiersze; w++)\n    {\n        for (int k = 0; k < kolumny; k++)\n        {\n            cout << \"Podaj [\" << w << \"][\" << k << \"]: \";\n            cin >> dane[w][k];\n            suma += dane[w][k];\n        }\n    }\n\n    cout << \"Suma: \" << suma << endl;\n    return 0;\n}\n```"
        },
        {
          "id": "07-zadania",
          "title": "Zadania",
          "context": "Wczytywanie i suma wszystkich elementów",
          "kind": "tasks",
          "markdown": "1. Oblicz osobno sumę każdego wiersza.\n2. Oblicz osobno sumę każdej kolumny."
        },
        {
          "id": "08-przekazywanie-tablicy-dwuwymiarowej-do-funkcji",
          "title": "Przekazywanie tablicy dwuwymiarowej do funkcji",
          "context": "",
          "kind": "theory",
          "markdown": "Przy zwykłej tablicy dwuwymiarowej kompilator musi znać rozmiar drugiego wymiaru.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nconstexpr int kolumny = 3;\n\nvoid wyswietl(const int tablica[][kolumny], int wiersze)\n{\n    for (int w = 0; w < wiersze; w++)\n    {\n        for (int k = 0; k < kolumny; k++)\n        {\n            cout << tablica[w][k] << ' ';\n        }\n\n        cout << endl;\n    }\n}\n\nint main()\n{\n    int dane[2][kolumny] = {\n        {7, 8, 9},\n        {1, 2, 3}\n    };\n\n    wyswietl(dane, 2);\n    return 0;\n}\n```\n\n`const` chroni elementy przed zmianą w funkcji."
        },
        {
          "id": "09-zadania",
          "title": "Zadania",
          "context": "Przekazywanie tablicy dwuwymiarowej do funkcji",
          "kind": "tasks",
          "markdown": "1. Napisz funkcję zwracającą sumę wszystkich elementów takiej tablicy."
        },
        {
          "id": "10-przekatne-macierzy-kwadratowej",
          "title": "Przekątne macierzy kwadratowej",
          "context": "",
          "kind": "theory",
          "markdown": "Macierz kwadratowa ma tyle samo wierszy co kolumn. Elementy głównej przekątnej mają takie same indeksy: `[0][0]`, `[1][1]`, `[2][2]`.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    constexpr int rozmiar = 3;\n    int macierz[rozmiar][rozmiar] = {\n        {1, 2, 3},\n        {4, 5, 6},\n        {7, 8, 9}\n    };\n    int suma = 0;\n\n    for (int i = 0; i < rozmiar; i++)\n    {\n        suma += macierz[i][i];\n    }\n\n    cout << suma << endl;\n    return 0;\n}\n```\n\nNa drugiej przekątnej indeks kolumny wynosi `rozmiar - 1 - i`."
        },
        {
          "id": "11-zadania",
          "title": "Zadania",
          "context": "Przekątne macierzy kwadratowej",
          "kind": "tasks",
          "markdown": "1. Oblicz sumę elementów drugiej przekątnej.\n2. Ustaw elementy głównej przekątnej na `0` i wyświetl macierz."
        },
        {
          "id": "12-rozmieszczenie-w-pamieci",
          "title": "Rozmieszczenie w pamięci",
          "context": "",
          "kind": "theory",
          "markdown": "Elementy zwykłej tablicy dwuwymiarowej są przechowywane w pamięci wierszami. Najpierw znajdują się wszystkie elementy wiersza `0`, potem wiersza `1` i tak dalej. Ta informacja będzie ważna podczas pracy ze wskaźnikami."
        },
        {
          "id": "13-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Wczytaj tablicę `3 × 4`, wyświetl ją w formie tabeli oraz oblicz sumę wszystkich elementów.\n2. Napisz funkcję, która dla tablicy mającej 3 kolumny zwróci największy element. Liczbę wierszy przekaż jako parametr.\n3. Wczytaj dwie macierze `2 × 3`, dodaj odpowiadające sobie elementy i zapisz wyniki w trzeciej macierzy. Wyświetl macierz wynikową.\n4. Dla macierzy kwadratowej `4 × 4` oblicz sumę głównej i drugiej przekątnej."
        }
      ]
    },
    {
      "number": 15,
      "id": "lekcja-15",
      "kind": "lesson",
      "title": "struktury",
      "sourceFile": "15_struktury.md",
      "checksum": "a595e10f0095",
      "sections": [
        {
          "id": "01-po-co-tworzymy-struktury",
          "title": "Po co tworzymy struktury",
          "context": "",
          "kind": "theory",
          "markdown": "Struktura pozwala połączyć pod jedną nazwą kilka powiązanych informacji, również różnych typów. Definicja struktury opisuje nowy typ danych.\n\n```cpp\nstruct Punkt\n{\n    double x;\n    double y;\n};\n```\n\n`Punkt` jest od tej chwili nazwą typu. `x` i `y` są jego polami, nazywanymi także składowymi."
        },
        {
          "id": "02-tworzenie-i-uzywanie-obiektu-struktury",
          "title": "Tworzenie i używanie obiektu struktury",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n\nusing namespace std;\n\nstruct Punkt\n{\n    double x;\n    double y;\n};\n\nint main()\n{\n    Punkt p = {2.5, 4.0};\n\n    cout << p.x << ' ' << p.y << endl;\n\n    p.x = 10.0;\n    cout << p.x << ' ' << p.y << endl;\n    return 0;\n}\n```\n\nDo pola zwykłego obiektu odwołujemy się operatorem kropki: `p.x`."
        },
        {
          "id": "03-zadania",
          "title": "Zadania",
          "context": "Tworzenie i używanie obiektu struktury",
          "kind": "tasks",
          "markdown": "1. Dodaj do struktury pole `string nazwa`, dołącz potrzebny nagłówek i wyświetl nazwę punktu.\n2. Utwórz drugi punkt o innych współrzędnych."
        },
        {
          "id": "04-struktura-przechowujaca-rozne-typy",
          "title": "Struktura przechowująca różne typy",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nstruct Uczen\n{\n    string imie;\n    int wiek;\n    double srednia;\n};\n\nint main()\n{\n    Uczen osoba = {\"Anna\", 16, 4.75};\n\n    cout << \"Imie: \" << osoba.imie << endl;\n    cout << \"Wiek: \" << osoba.wiek << endl;\n    cout << \"Srednia: \" << osoba.srednia << endl;\n    return 0;\n}\n```\n\nKolejność wartości w inicjalizacji odpowiada kolejności pól w definicji. Można też nadać polom wartości domyślne:\n\n```cpp\nstruct Uczen\n{\n    string imie;\n    int wiek = 0;\n    double srednia = 0.0;\n};\n```"
        },
        {
          "id": "05-zadania",
          "title": "Zadania",
          "context": "Struktura przechowująca różne typy",
          "kind": "tasks",
          "markdown": "1. Utwórz strukturę `Ksiazka` z polami: tytuł, autor, liczba stron i cena.\n2. Utwórz jeden obiekt `Ksiazka` i wyświetl wszystkie jego pola."
        },
        {
          "id": "06-wczytywanie-danych-do-struktury",
          "title": "Wczytywanie danych do struktury",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n#include <limits>\n#include <string>\n\nusing namespace std;\n\nstruct Produkt\n{\n    string nazwa;\n    double cena = 0.0;\n    int liczba_sztuk = 0;\n};\n\nint main()\n{\n    Produkt produkt;\n\n    cout << \"Podaj nazwe: \";\n    getline(cin, produkt.nazwa);\n\n    cout << \"Podaj cene i liczbe sztuk: \";\n    cin >> produkt.cena >> produkt.liczba_sztuk;\n\n    cout << \"Wartosc: \"\n         << produkt.cena * produkt.liczba_sztuk << endl;\n    return 0;\n}\n```\n\nKażde pole można traktować jak zwykłą zmienną jego typu."
        },
        {
          "id": "07-zadania",
          "title": "Zadania",
          "context": "Wczytywanie danych do struktury",
          "kind": "tasks",
          "markdown": "1. Dodaj pole `kod` typu `string` i wczytaj je jako pojedyncze słowo."
        },
        {
          "id": "08-kopiowanie-i-przypisywanie-struktur",
          "title": "Kopiowanie i przypisywanie struktur",
          "context": "",
          "kind": "theory",
          "markdown": "Obiekty tego samego typu można przypisywać. Kopiowane są wszystkie pola.\n\n```cpp\nPunkt pierwszy = {1.0, 2.0};\nPunkt drugi = pierwszy;\n\ndrugi.x = 100.0;\n```\n\nZmiana `drugi.x` nie zmienia `pierwszy.x`, ponieważ `drugi` jest osobnym obiektem."
        },
        {
          "id": "09-zadania",
          "title": "Zadania",
          "context": "Kopiowanie i przypisywanie struktur",
          "kind": "tasks",
          "markdown": "1. Wyświetl oba punkty przed zmianą i po zmianie pola drugiego punktu."
        },
        {
          "id": "10-struktura-jako-parametr-i-wynik-funkcji",
          "title": "Struktura jako parametr i wynik funkcji",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n\nusing namespace std;\n\nstruct Punkt\n{\n    double x;\n    double y;\n};\n\nPunkt przesun(Punkt punkt, double dx, double dy)\n{\n    punkt.x += dx;\n    punkt.y += dy;\n    return punkt;\n}\n\nvoid wyswietl(Punkt punkt)\n{\n    cout << '(' << punkt.x << \", \" << punkt.y << ')' << endl;\n}\n\nint main()\n{\n    Punkt p = {2.0, 3.0};\n    Punkt przesuniety = przesun(p, 5.0, -1.0);\n\n    wyswietl(p);\n    wyswietl(przesuniety);\n    return 0;\n}\n```\n\nTutaj funkcje otrzymują kopię struktury. Sposoby pozwalające uniknąć kopiowania zostaną omówione podczas lekcji o referencjach."
        },
        {
          "id": "11-zadania",
          "title": "Zadania",
          "context": "Struktura jako parametr i wynik funkcji",
          "kind": "tasks",
          "markdown": "1. Napisz funkcję obliczającą odległość punktu od początku układu. Użyj `sqrt` z nagłówka `<cmath>`."
        },
        {
          "id": "12-tablica-struktur",
          "title": "Tablica struktur",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nstruct Towar\n{\n    string nazwa;\n    double cena;\n};\n\nint main()\n{\n    Towar towary[3] = {\n        {\"Chleb\", 5.50},\n        {\"Mleko\", 4.20},\n        {\"Sok\", 6.00}\n    };\n\n    for (int i = 0; i < 3; i++)\n    {\n        cout << towary[i].nazwa << \": \" << towary[i].cena << endl;\n    }\n\n    return 0;\n}\n```\n\nNajpierw wybieramy element tablicy `towary[i]`, a potem jego pole `.nazwa` albo `.cena`."
        },
        {
          "id": "13-zadania",
          "title": "Zadania",
          "context": "Tablica struktur",
          "kind": "tasks",
          "markdown": "1. Wyświetl nazwę najdroższego towaru.\n2. Oblicz średnią cenę wszystkich towarów."
        },
        {
          "id": "14-struktury-zagniezdzone",
          "title": "Struktury zagnieżdżone",
          "context": "",
          "kind": "theory",
          "markdown": "Pole struktury może mieć typ innej struktury:\n\n```cpp\nstruct Data\n{\n    int dzien;\n    int miesiac;\n    int rok;\n};\n\nstruct Wydarzenie\n{\n    string nazwa;\n    Data data;\n};\n```\n\nDo roku wydarzenia odwołujemy się zapisem `wydarzenie.data.rok`."
        },
        {
          "id": "15-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Utwórz strukturę `Prostokat` zawierającą szerokość i wysokość. Napisz funkcje obliczające pole i obwód prostokąta.\n2. Utwórz strukturę `Zawodnik` z polami `imie`, `punkty` i `mecze`. Wczytaj dane pięciu zawodników do tablicy i wyświetl dane zawodnika z największą liczbą punktów.\n3. Utwórz struktury `Data` oraz `Film`. Film ma zawierać tytuł, rok premiery zapisany w strukturze `Data` oraz ocenę. Wczytaj trzy filmy i wyświetl najlepiej oceniony.\n4. Napisz funkcję, która otrzymuje tablicę produktów i jej rozmiar, a następnie zwraca łączną wartość wszystkich produktów, czyli sumę iloczynów ceny i liczby sztuk."
        }
      ]
    },
    {
      "number": 16,
      "id": "lekcja-16",
      "kind": "lesson",
      "title": "unie, typy wyliczeniowe i aliasy typów",
      "sourceFile": "16_unie_typy_wyliczeniowe_i_aliasy_typow.md",
      "checksum": "ad811dd13ee1",
      "sections": [
        {
          "id": "01-struktura-a-unia",
          "title": "Struktura a unia",
          "context": "",
          "kind": "theory",
          "markdown": "W strukturze każde pole ma własne miejsce w pamięci i wszystkie pola mogą jednocześnie przechowywać wartości. W unii wszystkie pola współdzielą ten sam obszar pamięci.\n\n```cpp\nunion Liczba\n{\n    int calkowita;\n    double rzeczywista;\n};\n```\n\nObiekt `Liczba` może w danym momencie przechowywać poprawną wartość jednego z tych pól. Zapis do jednego pola zastępuje poprzednią zawartość unii.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nunion Liczba\n{\n    int calkowita;\n    double rzeczywista;\n};\n\nint main()\n{\n    Liczba liczba = {};\n\n    liczba.calkowita = 12;\n    cout << liczba.calkowita << endl;\n\n    liczba.rzeczywista = 3.5;\n    cout << liczba.rzeczywista << endl;\n    return 0;\n}\n```\n\nPo przypisaniu `liczba.rzeczywista` nie należy odczytywać `liczba.calkowita`, ponieważ aktywnym polem jest teraz `rzeczywista`. Unie stosujemy tylko wtedy, gdy naprawdę potrzebujemy współdzielenia pamięci i potrafimy śledzić aktywne pole."
        },
        {
          "id": "02-zadania",
          "title": "Zadania",
          "context": "Struktura a unia",
          "kind": "tasks",
          "markdown": "1. Dodaj pole `char znak` i użyj go jako ostatniego aktywnego pola unii.\n2. Porównaj za pomocą `sizeof` rozmiar unii i struktury mających takie same pola `int` oraz `double`."
        },
        {
          "id": "03-jawna-informacja-o-aktywnym-polu",
          "title": "Jawna informacja o aktywnym polu",
          "context": "",
          "kind": "theory",
          "markdown": "Bezpieczny zapis unii zwykle łączy ją z osobnym znacznikiem mówiącym, które pole jest aktywne.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nenum class Rodzaj\n{\n    calkowita,\n    rzeczywista\n};\n\nunion Wartosc\n{\n    int calkowita;\n    double rzeczywista;\n};\n\nstruct Dane\n{\n    Rodzaj rodzaj;\n    Wartosc wartosc;\n};\n\nvoid wyswietl(Dane dane)\n{\n    if (dane.rodzaj == Rodzaj::calkowita)\n    {\n        cout << dane.wartosc.calkowita << endl;\n    }\n    else\n    {\n        cout << dane.wartosc.rzeczywista << endl;\n    }\n}\n\nint main()\n{\n    Dane dane = {};\n    dane.rodzaj = Rodzaj::calkowita;\n    dane.wartosc.calkowita = 25;\n\n    wyswietl(dane);\n    return 0;\n}\n```\n\nZmienna `rodzaj` określa, które pole wolno odczytać."
        },
        {
          "id": "04-zadania",
          "title": "Zadania",
          "context": "Jawna informacja o aktywnym polu",
          "kind": "tasks",
          "markdown": "1. Zmień program tak, aby przechowywał i wyświetlał wartość `2.75` z pola `rzeczywista`."
        },
        {
          "id": "05-typ-wyliczeniowy-enum",
          "title": "Typ wyliczeniowy `enum`",
          "context": "",
          "kind": "theory",
          "markdown": "Typ wyliczeniowy pozwala nadać nazwy ograniczonemu zbiorowi wartości. Dzięki temu kod jest czytelniejszy niż przy użyciu przypadkowych liczb.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nenum Dzien\n{\n    poniedzialek,\n    wtorek,\n    sroda,\n    czwartek,\n    piatek,\n    sobota,\n    niedziela\n};\n\nint main()\n{\n    Dzien dzisiaj = sroda;\n\n    if (dzisiaj == sobota || dzisiaj == niedziela)\n    {\n        cout << \"Weekend\" << endl;\n    }\n    else\n    {\n        cout << \"Dzien roboczy\" << endl;\n    }\n\n    return 0;\n}\n```\n\nDomyślnie pierwsza nazwa ma wartość `0`, następna `1` i tak dalej. Możemy podać własne wartości, na przykład `blad = -1` albo `sukces = 0`."
        },
        {
          "id": "06-zadania",
          "title": "Zadania",
          "context": "Typ wyliczeniowy `enum`",
          "kind": "tasks",
          "markdown": "1. Utwórz typ `Kolor` z wartościami `czerwony`, `zielony` i `niebieski`."
        },
        {
          "id": "07-bezpieczniejszy-typ-enum-class",
          "title": "Bezpieczniejszy typ `enum class`",
          "context": "",
          "kind": "theory",
          "markdown": "W C++ najczęściej wybieramy `enum class`. Nazwy wartości należą wtedy do typu wyliczeniowego i zapisujemy je z operatorem `::`.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nenum class StanSwiatla\n{\n    czerwone,\n    zolte,\n    zielone\n};\n\nint main()\n{\n    StanSwiatla stan = StanSwiatla::zielone;\n\n    switch (stan)\n    {\n        case StanSwiatla::czerwone:\n            cout << \"Stoj\" << endl;\n            break;\n\n        case StanSwiatla::zolte:\n            cout << \"Przygotuj sie\" << endl;\n            break;\n\n        case StanSwiatla::zielone:\n            cout << \"Jedz\" << endl;\n            break;\n    }\n\n    return 0;\n}\n```\n\n`enum class` nie zamienia się automatycznie na `int`, co chroni przed przypadkowym mieszaniem różnych pojęć."
        },
        {
          "id": "08-zadania",
          "title": "Zadania",
          "context": "Bezpieczniejszy typ `enum class`",
          "kind": "tasks",
          "markdown": "1. Dodaj wartość `awaria` i odpowiedni przypadek `switch`."
        },
        {
          "id": "09-aliasy-typow",
          "title": "Aliasy typów",
          "context": "",
          "kind": "theory",
          "markdown": "Instrukcja `using` może utworzyć dodatkową, czytelniejszą nazwę istniejącego typu.\n\n```cpp\nusing LiczbaPunktow = unsigned int;\nusing Temperatura = double;\n```\n\nAlias nie tworzy nowego typu. `LiczbaPunktow` jest nadal tym samym typem co `unsigned int`.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nusing Kilometry = double;\nusing Godziny = double;\n\nint main()\n{\n    Kilometry droga = 150.0;\n    Godziny czas = 2.0;\n\n    cout << droga / czas << \" km/h\" << endl;\n    return 0;\n}\n```\n\nW starszym kodzie można spotkać zapis `typedef unsigned int LiczbaPunktow;`. W nowych programach C++ zapis `using` jest zwykle czytelniejszy, szczególnie dla bardziej złożonych typów."
        },
        {
          "id": "10-zadania",
          "title": "Zadania",
          "context": "Aliasy typów",
          "kind": "tasks",
          "markdown": "1. Utwórz alias `Wiek` dla typu `unsigned short` i użyj go do utworzenia dwóch zmiennych."
        },
        {
          "id": "11-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Utwórz `enum class PoraRoku` i funkcję, która za pomocą `switch` wyświetli nazwę przekazanej pory roku.\n2. Utwórz `enum class Status` z wartościami `oczekuje`, `w_trakcie`, `zakonczone` oraz strukturę `Zadanie` zawierającą nazwę i status. Utwórz tablicę trzech zadań i wyświetl tylko zakończone.\n3. Utwórz unię przechowującą `int`, `double` albo `char`, typ wyliczeniowy opisujący aktywne pole oraz strukturę łączącą oba elementy. Napisz funkcję wyświetlającą poprawne pole.\n4. Utwórz alias `Identyfikator` dla `unsigned long long` i użyj go jako typu pola `id` w wybranej strukturze."
        }
      ]
    },
    {
      "number": 17,
      "id": "lekcja-17",
      "kind": "lesson",
      "title": "wprowadzenie do wskaźników",
      "sourceFile": "17_wprowadzenie_do_wskaznikow.md",
      "checksum": "9f78cca99198",
      "sections": [
        {
          "id": "01-adres-w-pamieci",
          "title": "Adres w pamięci",
          "context": "",
          "kind": "theory",
          "markdown": "Każda zmienna zajmuje miejsce w pamięci komputera. Operator `&` użyty przed nazwą zmiennej zwraca jej adres.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int liczba = 25;\n\n    cout << \"Wartosc: \" << liczba << endl;\n    cout << \"Adres: \" << &liczba << endl;\n    return 0;\n}\n```\n\nKonkretny adres może być inny przy każdym uruchomieniu. Nie należy zapisywać go na stałe w programie."
        },
        {
          "id": "02-zadania",
          "title": "Zadania",
          "context": "Adres w pamięci",
          "kind": "tasks",
          "markdown": "1. Utwórz dwie zmienne `int` i wyświetl ich adresy. Sprawdź, czy są różne."
        },
        {
          "id": "03-czym-jest-wskaznik",
          "title": "Czym jest wskaźnik",
          "context": "",
          "kind": "theory",
          "markdown": "Wskaźnik jest zmienną przechowującą adres obiektu. Typ wskaźnika określa, na obiekt jakiego typu ma wskazywać.\n\n```cpp\nint liczba = 25;\nint* wskaznik = &liczba;\n```\n\nZapis `int*` oznacza wskaźnik do wartości typu `int`. Zmienna `wskaznik` otrzymuje adres zmiennej `liczba`.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int liczba = 25;\n    int* wskaznik = &liczba;\n\n    cout << &liczba << endl;\n    cout << wskaznik << endl;\n    return 0;\n}\n```\n\nOba wiersze wyświetlą ten sam adres."
        },
        {
          "id": "04-zadania",
          "title": "Zadania",
          "context": "Czym jest wskaźnik",
          "kind": "tasks",
          "markdown": "1. Utwórz zmienną `double` i poprawnie dobrany wskaźnik przechowujący jej adres."
        },
        {
          "id": "05-dereferencja-wskaznika",
          "title": "Dereferencja wskaźnika",
          "context": "",
          "kind": "theory",
          "markdown": "Operator `*` użyty przed wskaźnikiem pozwala odczytać albo zmienić obiekt znajdujący się pod przechowywanym adresem. Nazywamy to dereferencją.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int liczba = 10;\n    int* wskaznik = &liczba;\n\n    cout << *wskaznik << endl;\n\n    *wskaznik = 40;\n\n    cout << liczba << endl;\n    cout << *wskaznik << endl;\n    return 0;\n}\n```\n\nPrzypisanie przez `*wskaznik` zmienia tę samą zmienną `liczba`. Nie powstaje kopia wartości.\n\nSymbol `*` ma dwa znaczenia zależne od miejsca:\n\n- w deklaracji `int* wskaznik` tworzy wskaźnik;\n- w wyrażeniu `*wskaznik` daje dostęp do wskazywanego obiektu."
        },
        {
          "id": "06-zadania",
          "title": "Zadania",
          "context": "Dereferencja wskaźnika",
          "kind": "tasks",
          "markdown": "1. Zwiększ wartość zmiennej o `5`, korzystając wyłącznie z dereferencji wskaźnika.\n2. Przewidź, co wyświetli program po instrukcji `(*wskaznik)++`."
        },
        {
          "id": "07-wskaznik-pusty-nullptr",
          "title": "Wskaźnik pusty `nullptr`",
          "context": "",
          "kind": "theory",
          "markdown": "Wskaźnik, który obecnie nie wskazuje na żaden obiekt, powinien mieć wartość `nullptr`.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int* wskaznik = nullptr;\n\n    if (wskaznik == nullptr)\n    {\n        cout << \"Brak obiektu.\" << endl;\n    }\n\n    return 0;\n}\n```\n\nNie wolno dereferencjonować `nullptr`. Próba wykonania `*wskaznik` nie daje poprawnego wyniku i zwykle kończy program błędem.\n\nPrzed dereferencją wskaźnika, który może być pusty, sprawdzamy jego wartość:\n\n```cpp\nif (wskaznik != nullptr)\n{\n    cout << *wskaznik << endl;\n}\n```"
        },
        {
          "id": "08-zadania",
          "title": "Zadania",
          "context": "Wskaźnik pusty `nullptr`",
          "kind": "tasks",
          "markdown": "1. Utwórz zmienną `int`, przypisz jej adres do pustego wcześniej wskaźnika, a następnie bezpiecznie wyświetl wartość."
        },
        {
          "id": "09-zmiana-adresu-przechowywanego-przez-wskaznik",
          "title": "Zmiana adresu przechowywanego przez wskaźnik",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int pierwsza = 3;\n    int druga = 8;\n    int* wskaznik = &pierwsza;\n\n    cout << *wskaznik << endl;\n\n    wskaznik = &druga;\n    cout << *wskaznik << endl;\n    return 0;\n}\n```\n\nWskaźnik najpierw prowadzi do `pierwsza`, a potem do `druga`. Samo przypisanie nowego adresu nie zmienia żadnej z tych liczb."
        },
        {
          "id": "10-zadania",
          "title": "Zadania",
          "context": "Zmiana adresu przechowywanego przez wskaźnik",
          "kind": "tasks",
          "markdown": "1. Po zmianie adresu przypisz przez wskaźnik wartość `100` i sprawdź, która zmienna się zmieniła."
        },
        {
          "id": "11-wskaznik-do-sta-ej-i-sta-y-wskaznik",
          "title": "Wskaźnik do stałej i stały wskaźnik",
          "context": "",
          "kind": "theory",
          "markdown": "Wskaźnik do stałej nie pozwala zmienić obiektu przez ten wskaźnik:\n\n```cpp\nint liczba = 5;\nconst int* wskaznik = &liczba;\n```\n\nMożna zmienić adres przechowywany w `wskaznik`, ale nie można wykonać `*wskaznik = 7`.\n\nStały wskaźnik musi zawsze przechowywać ten sam adres, lecz pozwala zmienić obiekt:\n\n```cpp\nint liczba = 5;\nint* const wskaznik = &liczba;\n```\n\nMożna wykonać `*wskaznik = 7`, ale nie można przypisać wskaźnikowi adresu innej zmiennej.\n\n```cpp\nconst int* const wskaznik = &liczba;\n```\n\nTen zapis nie pozwala zmienić ani wskazywanego obiektu przez wskaźnik, ani samego adresu."
        },
        {
          "id": "12-zadania",
          "title": "Zadania",
          "context": "Wskaźnik do stałej i stały wskaźnik",
          "kind": "tasks",
          "markdown": "1. Dla każdego z trzech zapisów wskaż, czy wolno zmienić adres i czy wolno zmienić wskazywaną wartość."
        },
        {
          "id": "13-wskaznik-do-struktury",
          "title": "Wskaźnik do struktury",
          "context": "",
          "kind": "theory",
          "markdown": "Do pola obiektu wskazywanego przez wskaźnik można dotrzeć zapisem `(*wskaznik).pole` albo krócej operatorem `->`.\n\n```cpp\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nstruct Osoba\n{\n    string imie;\n    int wiek;\n};\n\nint main()\n{\n    Osoba osoba = {\"Jan\", 17};\n    Osoba* wskaznik = &osoba;\n\n    cout << wskaznik->imie << endl;\n    wskaznik->wiek++;\n    cout << osoba.wiek << endl;\n    return 0;\n}\n```"
        },
        {
          "id": "14-zadania",
          "title": "Zadania",
          "context": "Wskaźnik do struktury",
          "kind": "tasks",
          "markdown": "1. Zmień imię obiektu za pomocą operatora `->`."
        },
        {
          "id": "15-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Utwórz dwie zmienne typu `double` i jeden wskaźnik. Wyświetl obie wartości, kierując wskaźnik kolejno na każdą zmienną.\n2. Utwórz funkcję bez parametrów zawierającą zmienną `int`, wskaźnik do niej oraz zmianę wartości wyłącznie przez dereferencję. Wyświetl wartość przed zmianą i po niej.\n3. Utwórz strukturę `Produkt` z polami `nazwa` i `cena`. Utwórz obiekt, wskaźnik do niego i za pomocą `->` obniż cenę o 10%.\n4. Napisz krótki program pokazujący różnicę między `const int*` a `int* const`. Niedozwolone instrukcje pozostaw jako komentarze i wyjaśnij je ustnie."
        }
      ]
    },
    {
      "number": 18,
      "id": "sprawdzian-18",
      "kind": "exam",
      "title": "Sprawdzian III",
      "sourceFile": "18_sprawdzian_iii_lekcje_1_17.md",
      "exam": {
        "duration": "45 minut",
        "points": 20,
        "sourceScope": "materiał z lekcji 1–17",
        "topics": [
          {
            "number": 13,
            "title": "napisy string i tablice znaków"
          },
          {
            "number": 14,
            "title": "statyczne tablice wielowymiarowe"
          },
          {
            "number": 15,
            "title": "struktury"
          },
          {
            "number": 16,
            "title": "unie, typy wyliczeniowe i aliasy typów"
          },
          {
            "number": 17,
            "title": "wprowadzenie do wskaźników"
          }
        ]
      },
      "sections": []
    },
    {
      "number": 19,
      "id": "lekcja-19",
      "kind": "lesson",
      "title": "wskaźniki i tablice",
      "sourceFile": "19_wskazniki_i_tablice.md",
      "checksum": "265d49910d54",
      "sections": [
        {
          "id": "01-nazwa-tablicy-i-adres-pierwszego-elementu",
          "title": "Nazwa tablicy i adres pierwszego elementu",
          "context": "",
          "kind": "theory",
          "markdown": "W większości wyrażeń nazwa zwykłej tablicy jest zamieniana na wskaźnik do jej pierwszego elementu.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int liczby[] = {10, 20, 30};\n    int* wskaznik = liczby;\n\n    cout << liczby << endl;\n    cout << &liczby[0] << endl;\n    cout << wskaznik << endl;\n    return 0;\n}\n```\n\nTrzy wyświetlone adresy są takie same. Nie zapisujemy znaku `&` przed nazwą tablicy podczas przypisywania jej do `int*`."
        },
        {
          "id": "02-zadania",
          "title": "Zadania",
          "context": "Nazwa tablicy i adres pierwszego elementu",
          "kind": "tasks",
          "markdown": "1. Utwórz tablicę `double` i wskaźnik do jej pierwszego elementu."
        },
        {
          "id": "03-indeksowanie-za-pomoca-wskaznika",
          "title": "Indeksowanie za pomocą wskaźnika",
          "context": "",
          "kind": "theory",
          "markdown": "Dodanie liczby do wskaźnika przesuwa go o odpowiednią liczbę elementów jego typu. `wskaznik + 1` wskazuje drugi element, a nie następny pojedynczy bajt.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int liczby[] = {10, 20, 30, 40};\n    int* wskaznik = liczby;\n\n    cout << *wskaznik << endl;\n    cout << *(wskaznik + 1) << endl;\n    cout << wskaznik[2] << endl;\n    return 0;\n}\n```\n\nZapisy `liczby[i]`, `wskaznik[i]` oraz `*(wskaznik + i)` prowadzą do tego samego elementu, jeśli wskaźnik wskazuje początek tablicy."
        },
        {
          "id": "04-zadania",
          "title": "Zadania",
          "context": "Indeksowanie za pomocą wskaźnika",
          "kind": "tasks",
          "markdown": "1. Wyświetl ostatni element tablicy wyłącznie za pomocą wskaźnika i operatora `*`.\n2. Zmień trzeci element na `300` przez zapis `*(wskaznik + 2)`."
        },
        {
          "id": "05-przesuwanie-wskaznika",
          "title": "Przesuwanie wskaźnika",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int liczby[] = {3, 6, 9, 12};\n    int* wskaznik = liczby;\n\n    for (int i = 0; i < 4; i++)\n    {\n        cout << *wskaznik << ' ';\n        wskaznik++;\n    }\n\n    cout << endl;\n    return 0;\n}\n```\n\nPo pętli wskaźnik znajduje się o jeden element za końcem tablicy. Taki adres można wyznaczyć i porównywać, ale nie wolno go dereferencjonować.\n\nJeżeli chcemy później ponownie użyć początku tablicy, zachowujemy osobny wskaźnik albo nie zmieniamy go i korzystamy z `wskaznik[i]`."
        },
        {
          "id": "06-zadania",
          "title": "Zadania",
          "context": "Przesuwanie wskaźnika",
          "kind": "tasks",
          "markdown": "1. Wyświetl tablicę od końca, rozpoczynając od wskaźnika do ostatniego elementu."
        },
        {
          "id": "07-arytmetyka-wskaznikow",
          "title": "Arytmetyka wskaźników",
          "context": "",
          "kind": "theory",
          "markdown": "Dla wskaźników prowadzących do tej samej tablicy można:\n\n- dodawać i odejmować liczbę całkowitą;\n- zwiększać i zmniejszać wskaźnik;\n- odejmować dwa wskaźniki, otrzymując liczbę elementów między nimi;\n- porównywać ich położenie.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int dane[] = {2, 4, 6, 8, 10};\n    int* poczatek = &dane[1];\n    int* koniec = &dane[4];\n\n    cout << *poczatek << endl;\n    cout << *koniec << endl;\n    cout << koniec - poczatek << endl;\n    return 0;\n}\n```\n\nProgram wyświetli odległość równą `3`, niezależnie od liczby bajtów zajmowanych przez `int`.\n\nNie wolno wykonywać takiej arytmetyki między wskaźnikami prowadzącymi do niezależnych obiektów."
        },
        {
          "id": "08-zadania",
          "title": "Zadania",
          "context": "Arytmetyka wskaźników",
          "kind": "tasks",
          "markdown": "1. Ustaw oba wskaźniki na pierwszy i ostatni element tablicy i oblicz ich odległość."
        },
        {
          "id": "09-tablica-jako-parametr-jest-przekazywana-jako-wskaznik",
          "title": "Tablica jako parametr jest przekazywana jako wskaźnik",
          "context": "",
          "kind": "theory",
          "markdown": "Poniższe nagłówki parametrów oznaczają dla funkcji to samo:\n\n```cpp\nvoid wyswietl(const int tablica[], int rozmiar);\nvoid wyswietl(const int* tablica, int rozmiar);\n```\n\nDlatego funkcja nie zna rozmiaru tablicy i trzeba przekazać go osobno.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint suma(const int* tablica, int rozmiar)\n{\n    int wynik = 0;\n\n    for (int i = 0; i < rozmiar; i++)\n    {\n        wynik += *(tablica + i);\n    }\n\n    return wynik;\n}\n\nint main()\n{\n    int liczby[] = {1, 2, 3, 4};\n    cout << suma(liczby, 4) << endl;\n    return 0;\n}\n```"
        },
        {
          "id": "10-zadania",
          "title": "Zadania",
          "context": "Tablica jako parametr jest przekazywana jako wskaźnik",
          "kind": "tasks",
          "markdown": "1. Napisz funkcję wskaźnikową zwracającą największą wartość niepustej tablicy."
        },
        {
          "id": "11-wskaznik-do-wskaznika",
          "title": "Wskaźnik do wskaźnika",
          "context": "",
          "kind": "theory",
          "markdown": "Wskaźnik także jest zmienną i ma adres. Wskaźnik do wskaźnika zapisujemy za pomocą dwóch gwiazdek.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int liczba = 7;\n    int* pierwszy = &liczba;\n    int** drugi = &pierwszy;\n\n    cout << liczba << endl;\n    cout << *pierwszy << endl;\n    cout << **drugi << endl;\n\n    **drugi = 50;\n    cout << liczba << endl;\n    return 0;\n}\n```\n\n`*drugi` daje wskaźnik `pierwszy`, a `**drugi` daje wartość `liczba`. Wskaźnik do wskaźnika będzie potrzebny przy dynamicznych tablicach dwuwymiarowych."
        },
        {
          "id": "12-zadania",
          "title": "Zadania",
          "context": "Wskaźnik do wskaźnika",
          "kind": "tasks",
          "markdown": "1. Zmień wartość liczby przez `**drugi`, a potem wyświetl ją na trzy sposoby."
        },
        {
          "id": "13-tablica-dwuwymiarowa-a-wskazniki",
          "title": "Tablica dwuwymiarowa a wskaźniki",
          "context": "",
          "kind": "theory",
          "markdown": "W statycznej tablicy `int dane[2][3]` nazwa `dane` wskazuje pierwszy cały wiersz, czyli tablicę trzech liczb. Dlatego nie ma po prostu typu `int**`. Wartość elementu można jednak zapisać równoważnie:\n\n```cpp\ndane[1][2]\n*(*(dane + 1) + 2)\n```\n\nW zwykłym kodzie indeksowanie jest czytelniejsze. Zapis wskaźnikowy pokazuje sposób rozmieszczenia elementów w pamięci."
        },
        {
          "id": "14-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Utwórz tablicę 8 liczb i wyświetl wszystkie elementy za pomocą przesuwanego wskaźnika, bez operatora `[]`.\n2. Napisz funkcję `ileDodatnich(const int* tablica, int rozmiar)`, która zwróci liczbę dodatnich elementów.\n3. Odwróć tablicę, korzystając z dwóch wskaźników: jednego rozpoczynającego na pierwszym, a drugiego na ostatnim elemencie. Przesuwaj je do środka.\n4. Utwórz zmienną, wskaźnik i wskaźnik do wskaźnika. Wykonaj zmianę wartości na każdym możliwym poziomie i przygotuj się do wyjaśnienia każdego operatora `*`."
        }
      ]
    },
    {
      "number": 20,
      "id": "lekcja-20",
      "kind": "lesson",
      "title": "argumenty funkcji: wartość, wskaźnik i referencja",
      "sourceFile": "20_argumenty_funkcji_wartosc_wskaznik_referencja.md",
      "checksum": "7df71453670c",
      "sections": [
        {
          "id": "01-przekazywanie-przez-wartosc",
          "title": "Przekazywanie przez wartość",
          "context": "",
          "kind": "theory",
          "markdown": "Parametr przekazywany przez wartość jest kopią argumentu. Funkcja może zmienić kopię, ale nie zmieni oryginalnej zmiennej.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nvoid zwieksz(int liczba)\n{\n    liczba++;\n    cout << \"W funkcji: \" << liczba << endl;\n}\n\nint main()\n{\n    int x = 5;\n    zwieksz(x);\n    cout << \"W main: \" << x << endl;\n    return 0;\n}\n```\n\nTen sposób jest odpowiedni dla małych danych, których funkcja nie ma zmieniać."
        },
        {
          "id": "02-zadania",
          "title": "Zadania",
          "context": "Przekazywanie przez wartość",
          "kind": "tasks",
          "markdown": "1. Wywołaj funkcję dwa razy i przewidź oba wyniki."
        },
        {
          "id": "03-przekazywanie-wskaznika",
          "title": "Przekazywanie wskaźnika",
          "context": "",
          "kind": "theory",
          "markdown": "Do funkcji można przekazać adres zmiennej. Funkcja dereferencjonuje wskaźnik i zmienia oryginalny obiekt.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nvoid zwieksz(int* liczba)\n{\n    if (liczba != nullptr)\n    {\n        (*liczba)++;\n    }\n}\n\nint main()\n{\n    int x = 5;\n    zwieksz(&x);\n    cout << x << endl;\n    return 0;\n}\n```\n\nWywołujący wyraźnie przekazuje adres za pomocą `&x`. Wskaźnik może mieć wartość `nullptr`, dlatego funkcja powinna obsłużyć taką możliwość, jeśli jest ona dopuszczalna."
        },
        {
          "id": "04-zadania",
          "title": "Zadania",
          "context": "Przekazywanie wskaźnika",
          "kind": "tasks",
          "markdown": "1. Wywołaj `zwieksz(nullptr)` i wyjaśnij, dlaczego program działa poprawnie.\n2. Napisz funkcję wskaźnikową ustawiającą liczbę na zero."
        },
        {
          "id": "05-przekazywanie-przez-referencje",
          "title": "Przekazywanie przez referencję",
          "context": "",
          "kind": "theory",
          "markdown": "Referencja jest dodatkową nazwą istniejącego obiektu. Parametr referencyjny oznaczamy znakiem `&` przy typie.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nvoid zwieksz(int& liczba)\n{\n    liczba++;\n}\n\nint main()\n{\n    int x = 5;\n    zwieksz(x);\n    cout << x << endl;\n    return 0;\n}\n```\n\nWewnątrz funkcji używamy parametru jak zwykłej zmiennej, bez dereferencji. Referencja musi odnosić się do obiektu i nie ma odpowiednika `nullptr`."
        },
        {
          "id": "06-zadania",
          "title": "Zadania",
          "context": "Przekazywanie przez referencję",
          "kind": "tasks",
          "markdown": "1. Napisz funkcję `podwoj(int& liczba)`, która zmieni przekazaną zmienną."
        },
        {
          "id": "07-zamiana-dwoch-wartosci",
          "title": "Zamiana dwóch wartości",
          "context": "",
          "kind": "theory",
          "markdown": "Przekazanie przez wartość nie wystarczy do zamiany zmiennych wywołującego. Można użyć wskaźników albo referencji.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nvoid zamien(int& a, int& b)\n{\n    int pomocnicza = a;\n    a = b;\n    b = pomocnicza;\n}\n\nint main()\n{\n    int x = 3;\n    int y = 8;\n\n    zamien(x, y);\n    cout << x << ' ' << y << endl;\n    return 0;\n}\n```"
        },
        {
          "id": "08-zadania",
          "title": "Zadania",
          "context": "Zamiana dwóch wartości",
          "kind": "tasks",
          "markdown": "1. Napisz drugą wersję funkcji, korzystając z parametrów `int*`. Pamiętaj o dereferencji i wywołaniu z adresami."
        },
        {
          "id": "09-zwracanie-kilku-wynikow-przez-parametry",
          "title": "Zwracanie kilku wyników przez parametry",
          "context": "",
          "kind": "theory",
          "markdown": "Funkcja bezpośrednio zwraca jedną wartość, ale parametry referencyjne mogą przekazać dodatkowe wyniki.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nvoid dzielenie(int a, int b, int& iloraz, int& reszta)\n{\n    iloraz = a / b;\n    reszta = a % b;\n}\n\nint main()\n{\n    int iloraz = 0;\n    int reszta = 0;\n\n    dzielenie(17, 5, iloraz, reszta);\n    cout << iloraz << ' ' << reszta << endl;\n    return 0;\n}\n```\n\nFunkcja zakłada, że dzielnik nie jest zerem. Warunek można sprawdzić przed wywołaniem albo wewnątrz funkcji."
        },
        {
          "id": "10-zadania",
          "title": "Zadania",
          "context": "Zwracanie kilku wyników przez parametry",
          "kind": "tasks",
          "markdown": "1. Napisz funkcję, która przez dwa parametry referencyjne zwróci minimum i maksimum z trzech liczb."
        },
        {
          "id": "11-sta-a-referencja",
          "title": "Stała referencja",
          "context": "",
          "kind": "theory",
          "markdown": "Duże obiekty, na przykład `string` albo struktury, warto przekazywać przez stałą referencję. Nie powstaje kopia, a funkcja nie może zmienić obiektu.\n\n```cpp\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nstruct Osoba\n{\n    string imie;\n    int wiek;\n};\n\nvoid wyswietl(const Osoba& osoba)\n{\n    cout << osoba.imie << \", \" << osoba.wiek << endl;\n}\n\nint main()\n{\n    Osoba osoba = {\"Maja\", 17};\n    wyswietl(osoba);\n    return 0;\n}\n```\n\n`const Osoba&` jest częstym sposobem przekazywania obiektu tylko do odczytu."
        },
        {
          "id": "12-zadania",
          "title": "Zadania",
          "context": "Stała referencja",
          "kind": "tasks",
          "markdown": "1. Napisz funkcję przyjmującą `const string&` i zwracającą liczbę znaków napisu."
        },
        {
          "id": "13-kiedy-wybrac-ktory-sposob",
          "title": "Kiedy wybrać który sposób",
          "context": "",
          "kind": "theory",
          "markdown": "- przez wartość: funkcja potrzebuje własnej kopii małego obiektu;\n- przez stałą referencję: funkcja tylko odczytuje większy obiekt;\n- przez referencję: funkcja ma obowiązkowo zmienić istniejący obiekt;\n- przez wskaźnik: funkcja pracuje z adresem albo dopuszcza brak obiektu zapisany jako `nullptr`;\n- tablice: do funkcji trafiają jako wskaźnik do pierwszego elementu, a rozmiar przekazujemy osobno.\n\nNie wolno zwracać wskaźnika ani referencji do zwykłej zmiennej lokalnej. Taki obiekt przestaje istnieć po zakończeniu funkcji."
        },
        {
          "id": "14-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Napisz trzy funkcje zwiększające liczbę: pierwszą z parametrem przez wartość, drugą ze wskaźnikiem, trzecią z referencją. Pokaż i wyjaśnij różnice w wynikach.\n2. Napisz funkcję `uporzadkuj(int& a, int& b)`, która zamieni liczby tylko wtedy, gdy `a > b`.\n3. Napisz funkcję przyjmującą trzy liczby oraz dwa parametry wskaźnikowe. Funkcja ma zapisać pod wskazanymi adresami najmniejszą i największą liczbę. Obsłuż `nullptr`.\n4. Utwórz strukturę `Prostokat` i funkcję `skaluj(Prostokat& prostokat, double mnoznik)`. Druga funkcja, korzystająca z `const Prostokat&`, ma obliczać pole bez kopiowania struktury."
        }
      ]
    },
    {
      "number": 21,
      "id": "lekcja-21",
      "kind": "lesson",
      "title": "dynamiczna alokacja pamięci",
      "sourceFile": "21_dynamiczna_alokacja_pamieci.md",
      "checksum": "3d44fbc6ace4",
      "sections": [
        {
          "id": "01-pamiec-automatyczna-i-dynamiczna",
          "title": "Pamięć automatyczna i dynamiczna",
          "context": "",
          "kind": "theory",
          "markdown": "Zwykła zmienna lokalna jest tworzona po wejściu do bloku i automatycznie niszczona po jego opuszczeniu. Czasem rozmiar lub czas życia danych trzeba ustalić dopiero podczas działania programu. Wtedy można użyć pamięci dynamicznej.\n\nOperator `new` tworzy obiekt dynamicznie i zwraca wskaźnik do niego. Operator `delete` niszczy obiekt i zwalnia zajętą pamięć.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int* liczba = new int;\n\n    *liczba = 42;\n    cout << *liczba << endl;\n\n    delete liczba;\n    liczba = nullptr;\n    return 0;\n}\n```\n\nKażde udane `new` dla pojedynczego obiektu musi mieć odpowiadające mu `delete`."
        },
        {
          "id": "02-zadania",
          "title": "Zadania",
          "context": "Pamięć automatyczna i dynamiczna",
          "kind": "tasks",
          "markdown": "1. Utwórz dynamicznie zmienną `double`, przypisz jej wartość i poprawnie zwolnij pamięć."
        },
        {
          "id": "03-inicjalizacja-obiektu-dynamicznego",
          "title": "Inicjalizacja obiektu dynamicznego",
          "context": "",
          "kind": "theory",
          "markdown": "Wartość można podać od razu:\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int* liczba = new int(25);\n    double* pomiar = new double{3.5};\n\n    cout << *liczba << ' ' << *pomiar << endl;\n\n    delete liczba;\n    delete pomiar;\n    liczba = nullptr;\n    pomiar = nullptr;\n    return 0;\n}\n```\n\nZapis `new int{}` tworzy wyzerowaną liczbę. Zapis `new int` bez inicjalizatora pozostawia dla typu prostego nieokreśloną wartość, której nie wolno odczytać przed przypisaniem."
        },
        {
          "id": "04-zadania",
          "title": "Zadania",
          "context": "Inicjalizacja obiektu dynamicznego",
          "kind": "tasks",
          "markdown": "1. Porównaj `new int{}` i `new int(7)`, wyświetlając obie wartości."
        },
        {
          "id": "05-dynamiczny-obiekt-struktury",
          "title": "Dynamiczny obiekt struktury",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nstruct Produkt\n{\n    string nazwa;\n    double cena;\n};\n\nint main()\n{\n    Produkt* produkt = new Produkt{\"Monitor\", 899.0};\n\n    cout << produkt->nazwa << endl;\n    produkt->cena *= 0.9;\n    cout << produkt->cena << endl;\n\n    delete produkt;\n    produkt = nullptr;\n    return 0;\n}\n```\n\nOperator `->` daje dostęp do pola obiektu wskazywanego przez wskaźnik."
        },
        {
          "id": "06-zadania",
          "title": "Zadania",
          "context": "Dynamiczny obiekt struktury",
          "kind": "tasks",
          "markdown": "1. Utwórz dynamicznie obiekt `Uczen` zawierający imię i wiek, a następnie zmień wiek przez wskaźnik."
        },
        {
          "id": "07-wyciek-pamieci",
          "title": "Wyciek pamięci",
          "context": "",
          "kind": "theory",
          "markdown": "Wyciek występuje wtedy, gdy program traci ostatni adres dynamicznego obiektu bez wcześniejszego `delete`.\n\n```cpp\nint* wskaznik = new int(5);\nwskaznik = new int(8);\n```\n\nAdres pierwszej liczby został utracony, więc nie da się już jej zwolnić. Poprawna kolejność to:\n\n```cpp\nint* wskaznik = new int(5);\ndelete wskaznik;\nwskaznik = new int(8);\ndelete wskaznik;\nwskaznik = nullptr;\n```"
        },
        {
          "id": "08-zadania",
          "title": "Zadania",
          "context": "Wyciek pamięci",
          "kind": "tasks",
          "markdown": "1. Wyjaśnij, gdzie powstał wyciek w pierwszym fragmencie i jak został usunięty w drugim."
        },
        {
          "id": "09-wiszacy-wskaznik-i-podwojne-zwolnienie",
          "title": "Wiszący wskaźnik i podwójne zwolnienie",
          "context": "",
          "kind": "theory",
          "markdown": "Po `delete` obiekt nie istnieje, ale wskaźnik nadal może zawierać stary adres. Jest wtedy wskaźnikiem wiszącym. Nie wolno go dereferencjonować ani ponownie zwalniać.\n\n```cpp\ndelete wskaznik;\nwskaznik = nullptr;\n```\n\nPrzypisanie `nullptr` ułatwia rozpoznanie, że wskaźnik nie prowadzi do obiektu. `delete nullptr;` jest dozwolone i niczego nie robi, ale dwukrotne `delete` tego samego niepustego adresu jest błędem."
        },
        {
          "id": "10-zadania",
          "title": "Zadania",
          "context": "Wiszący wskaźnik i podwójne zwolnienie",
          "kind": "tasks",
          "markdown": "1. Wskaż, które instrukcje są błędne i dlaczego:\n\n```cpp\nint* p = new int(3);\ndelete p;\ncout << *p << endl;\ndelete p;\n```"
        },
        {
          "id": "11-przekazywanie-dynamicznego-obiektu-do-funkcji",
          "title": "Przekazywanie dynamicznego obiektu do funkcji",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n\nusing namespace std;\n\nvoid podwoj(int* liczba)\n{\n    if (liczba != nullptr)\n    {\n        *liczba *= 2;\n    }\n}\n\nint main()\n{\n    int* liczba = new int(6);\n\n    podwoj(liczba);\n    cout << *liczba << endl;\n\n    delete liczba;\n    liczba = nullptr;\n    return 0;\n}\n```\n\nFunkcja nie zwalnia obiektu, którego nie utworzyła. W tym przykładzie właścicielem pamięci jest `main` i to on wykonuje `delete`."
        },
        {
          "id": "12-zadania",
          "title": "Zadania",
          "context": "Przekazywanie dynamicznego obiektu do funkcji",
          "kind": "tasks",
          "markdown": "1. Napisz funkcję `wyzeruj`, która bezpiecznie ustawi wskazywaną liczbę na `0`."
        },
        {
          "id": "13-dobra-zasada-w-asnosci",
          "title": "Dobra zasada własności",
          "context": "",
          "kind": "theory",
          "markdown": "Kod powinien jasno określać, kto odpowiada za każde `delete`. W nowoczesnych programach C++ ręczne `new` i `delete` często zastępuje się kontenerami oraz inteligentnymi wskaźnikami. Tutaj używamy ich bezpośrednio, aby zrozumieć pamięć dynamiczną i działanie struktur danych omawianych później."
        },
        {
          "id": "14-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Utwórz dynamicznie dwie liczby `double`, wczytaj ich wartości, wyświetl sumę, a następnie poprawnie zwolnij pamięć.\n2. Utwórz strukturę `Ksiazka` z polami `tytul` i `liczba_stron`. Utwórz dynamiczny obiekt tej struktury, wczytaj dane, wyświetl je i zwolnij pamięć.\n3. Napisz funkcję `utworzLiczbe(int wartosc)`, która utworzy dynamiczny obiekt `int` i zwróci jego adres. W `main` wyświetl wartość i wykonaj `delete`.\n4. Przygotuj trzy krótkie błędne fragmenty pokazujące wyciek pamięci, wiszący wskaźnik i podwójne zwolnienie. Nie uruchamiaj ich. Obok każdego zapisz poprawioną wersję."
        }
      ]
    },
    {
      "number": 22,
      "id": "lekcja-22",
      "kind": "lesson",
      "title": "dynamiczne tablice jednowymiarowe",
      "sourceFile": "22_dynamiczne_tablice.md",
      "checksum": "308a9a41607a",
      "sections": [
        {
          "id": "01-rozmiar-ustalany-podczas-dzia-ania-programu",
          "title": "Rozmiar ustalany podczas działania programu",
          "context": "",
          "kind": "theory",
          "markdown": "Rozmiar statycznej tablicy musi być znany podczas kompilacji. Tablicę dynamiczną można utworzyć dopiero po wczytaniu rozmiaru.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int rozmiar = 0;\n    cout << \"Podaj dodatni rozmiar: \";\n    cin >> rozmiar;\n\n    if (rozmiar <= 0)\n    {\n        cout << \"Nieprawidlowy rozmiar.\" << endl;\n        return 0;\n    }\n\n    int* tablica = new int[rozmiar];\n\n    for (int i = 0; i < rozmiar; i++)\n    {\n        tablica[i] = 0;\n    }\n\n    delete[] tablica;\n    tablica = nullptr;\n    return 0;\n}\n```\n\nTablicę utworzoną przez `new[]` zawsze zwalniamy za pomocą `delete[]`. Nie wolno zastąpić go pojedynczym `delete`."
        },
        {
          "id": "02-zadania",
          "title": "Zadania",
          "context": "Rozmiar ustalany podczas działania programu",
          "kind": "tasks",
          "markdown": "1. Zmień program tak, aby inicjalizował elementy wartościami od `1` do `rozmiar`."
        },
        {
          "id": "03-zerowanie-podczas-tworzenia",
          "title": "Zerowanie podczas tworzenia",
          "context": "",
          "kind": "theory",
          "markdown": "Zapis z pustymi nawiasami klamrowymi zeruje wszystkie elementy:\n\n```cpp\nint* tablica = new int[rozmiar]{};\n```\n\nBez `{}` elementy prostego typu mają nieokreślone wartości i trzeba je zapisać przed odczytem."
        },
        {
          "id": "04-wczytywanie-i-przetwarzanie",
          "title": "Wczytywanie i przetwarzanie",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int rozmiar = 0;\n    cin >> rozmiar;\n\n    if (rozmiar <= 0)\n    {\n        cout << \"Nieprawidlowy rozmiar.\" << endl;\n        return 0;\n    }\n\n    int* liczby = new int[rozmiar];\n    int suma = 0;\n\n    for (int i = 0; i < rozmiar; i++)\n    {\n        cin >> liczby[i];\n        suma += liczby[i];\n    }\n\n    cout << \"Srednia: \"\n         << static_cast<double>(suma) / rozmiar << endl;\n\n    delete[] liczby;\n    liczby = nullptr;\n    return 0;\n}\n```\n\nIndeksowanie tablicy dynamicznej działa tak samo jak statycznej. Program nadal musi pilnować zakresu indeksów."
        },
        {
          "id": "05-zadania",
          "title": "Zadania",
          "context": "Wczytywanie i przetwarzanie",
          "kind": "tasks",
          "markdown": "1. Dodaj wyszukiwanie najmniejszej i największej wartości.\n2. Policz, ile elementów jest większych od średniej."
        },
        {
          "id": "06-tablica-dynamiczna-w-funkcjach",
          "title": "Tablica dynamiczna w funkcjach",
          "context": "",
          "kind": "theory",
          "markdown": "Funkcje pracują z tablicą dynamiczną tak samo jak ze wskaźnikiem do początku zwykłej tablicy.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nvoid wczytaj(int* tablica, int rozmiar)\n{\n    for (int i = 0; i < rozmiar; i++)\n    {\n        cin >> tablica[i];\n    }\n}\n\nint suma(const int* tablica, int rozmiar)\n{\n    int wynik = 0;\n\n    for (int i = 0; i < rozmiar; i++)\n    {\n        wynik += tablica[i];\n    }\n\n    return wynik;\n}\n\nint main()\n{\n    int rozmiar = 0;\n    cin >> rozmiar;\n\n    if (rozmiar <= 0)\n    {\n        return 0;\n    }\n\n    int* dane = new int[rozmiar];\n    wczytaj(dane, rozmiar);\n    cout << suma(dane, rozmiar) << endl;\n\n    delete[] dane;\n    dane = nullptr;\n    return 0;\n}\n```\n\nFunkcje `wczytaj` i `suma` nie zwalniają tablicy. Odpowiada za to funkcja `main`, która ją utworzyła."
        },
        {
          "id": "07-zadania",
          "title": "Zadania",
          "context": "Tablica dynamiczna w funkcjach",
          "kind": "tasks",
          "markdown": "1. Dodaj funkcję wyświetlającą tablicę od końca."
        },
        {
          "id": "08-funkcja-tworzaca-tablice",
          "title": "Funkcja tworząca tablicę",
          "context": "",
          "kind": "theory",
          "markdown": "Funkcja może utworzyć tablicę i zwrócić jej adres. Osoba wywołująca przejmuje wtedy obowiązek użycia `delete[]`.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint* utworzCiag(int rozmiar)\n{\n    int* tablica = new int[rozmiar];\n\n    for (int i = 0; i < rozmiar; i++)\n    {\n        tablica[i] = i + 1;\n    }\n\n    return tablica;\n}\n\nint main()\n{\n    int rozmiar = 5;\n    int* liczby = utworzCiag(rozmiar);\n\n    for (int i = 0; i < rozmiar; i++)\n    {\n        cout << liczby[i] << ' ';\n    }\n\n    cout << endl;\n    delete[] liczby;\n    liczby = nullptr;\n    return 0;\n}\n```"
        },
        {
          "id": "09-zadania",
          "title": "Zadania",
          "context": "Funkcja tworząca tablicę",
          "kind": "tasks",
          "markdown": "1. Zmień funkcję tak, aby tworzyła tablicę kolejnych liczb parzystych."
        },
        {
          "id": "10-zmiana-rozmiaru-przez-ponowna-alokacje",
          "title": "Zmiana rozmiaru przez ponowną alokację",
          "context": "",
          "kind": "theory",
          "markdown": "Rozmiaru istniejącej tablicy utworzonej przez `new[]` nie można zmienić. Trzeba utworzyć nową tablicę, skopiować potrzebne elementy i zwolnić starą.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int stary_rozmiar = 3;\n    int* stara = new int[stary_rozmiar]{10, 20, 30};\n\n    int nowy_rozmiar = 5;\n    int* nowa = new int[nowy_rozmiar]{};\n\n    for (int i = 0; i < stary_rozmiar; i++)\n    {\n        nowa[i] = stara[i];\n    }\n\n    delete[] stara;\n    stara = nullptr;\n\n    nowa[3] = 40;\n    nowa[4] = 50;\n\n    for (int i = 0; i < nowy_rozmiar; i++)\n    {\n        cout << nowa[i] << ' ';\n    }\n\n    cout << endl;\n    delete[] nowa;\n    nowa = nullptr;\n    return 0;\n}\n```\n\nNajpierw kopiujemy dane, a dopiero potem zwalniamy starą tablicę. Po `delete[] stara` nie wolno odczytywać jej elementów."
        },
        {
          "id": "11-zadania",
          "title": "Zadania",
          "context": "Zmiana rozmiaru przez ponowną alokację",
          "kind": "tasks",
          "markdown": "1. Zmień program tak, aby zmniejszył tablicę z pięciu elementów do dwóch i zachował dwa pierwsze."
        },
        {
          "id": "12-dynamiczna-tablica-struktur",
          "title": "Dynamiczna tablica struktur",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nstruct Punkt\n{\n    string nazwa;\n    double x;\n    double y;\n};\n\nint main()\n{\n    int rozmiar = 2;\n    Punkt* punkty = new Punkt[rozmiar]{\n        {\"A\", 1.0, 2.0},\n        {\"B\", 4.0, 5.0}\n    };\n\n    cout << punkty[1].nazwa << ' ' << punkty[1].x << endl;\n\n    delete[] punkty;\n    punkty = nullptr;\n    return 0;\n}\n```\n\n`delete[]` wywołuje zakończenie życia każdego elementu tablicy, także obiektów zawierających `string`."
        },
        {
          "id": "13-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Wczytaj rozmiar i dynamiczną tablicę liczb całkowitych. Wyświetl minimum, maksimum i średnią, a następnie poprawnie zwolnij pamięć.\n2. Napisz funkcję tworzącą dynamiczną tablicę `n` liczb, w której element o indeksie `i` ma wartość `i * i`. Zwróć adres i zwolnij pamięć w `main`.\n3. Wczytaj dynamiczną tablicę, utwórz drugą o dwukrotnie większym rozmiarze, skopiuj stare dane, a pozostałe pola wyzeruj. Zadbaj o oba `delete[]`.\n4. Utwórz dynamiczną tablicę struktur `Uczen`. Wczytaj imiona i wyniki, a następnie wyświetl ucznia z największym wynikiem."
        }
      ]
    },
    {
      "number": 23,
      "id": "lekcja-23",
      "kind": "lesson",
      "title": "dynamiczne tablice wielowymiarowe",
      "sourceFile": "23_dynamiczne_tablice_wielowymiarowe.md",
      "checksum": "8087519a7027",
      "sections": [
        {
          "id": "01-tablica-wskaznikow-do-wierszy",
          "title": "Tablica wskaźników do wierszy",
          "context": "",
          "kind": "theory",
          "markdown": "Jednym ze sposobów utworzenia dynamicznej tablicy dwuwymiarowej jest użycie wskaźnika do wskaźnika. Najpierw tworzymy tablicę wskaźników, a następnie dla każdego wskaźnika osobną tablicę elementów.\n\n```cpp\nint** tablica = new int*[wiersze];\n\nfor (int w = 0; w < wiersze; w++)\n{\n    tablica[w] = new int[kolumny]{};\n}\n```\n\n`tablica` wskazuje tablicę wierszy, a `tablica[w]` wskazuje początek wybranego wiersza."
        },
        {
          "id": "02-pe-ny-przyk-ad-tworzenia-i-uzywania",
          "title": "Pełny przykład tworzenia i używania",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int wiersze = 2;\n    int kolumny = 3;\n\n    int** tablica = new int*[wiersze];\n\n    for (int w = 0; w < wiersze; w++)\n    {\n        tablica[w] = new int[kolumny]{};\n    }\n\n    for (int w = 0; w < wiersze; w++)\n    {\n        for (int k = 0; k < kolumny; k++)\n        {\n            tablica[w][k] = w * kolumny + k + 1;\n            cout << tablica[w][k] << ' ';\n        }\n\n        cout << endl;\n    }\n\n    for (int w = 0; w < wiersze; w++)\n    {\n        delete[] tablica[w];\n    }\n\n    delete[] tablica;\n    tablica = nullptr;\n    return 0;\n}\n```\n\nPamięć zwalniamy w odwrotnej kolejności: najpierw każdy wiersz, a dopiero potem tablicę wskaźników. Pominięcie wierszy spowodowałoby wycieki pamięci."
        },
        {
          "id": "03-zadania",
          "title": "Zadania",
          "context": "Pełny przykład tworzenia i używania",
          "kind": "tasks",
          "markdown": "1. Zmień rozmiar na `3 × 4` i wypełnij tablicę samymi jedynkami.\n2. Dodaj obliczanie sumy wszystkich elementów."
        },
        {
          "id": "04-funkcja-tworzaca-tablice-2d",
          "title": "Funkcja tworząca tablicę 2D",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n\nusing namespace std;\n\nint** utworzTablice(int wiersze, int kolumny)\n{\n    int** tablica = new int*[wiersze];\n\n    for (int w = 0; w < wiersze; w++)\n    {\n        tablica[w] = new int[kolumny]{};\n    }\n\n    return tablica;\n}\n\nvoid usunTablice(int** tablica, int wiersze)\n{\n    for (int w = 0; w < wiersze; w++)\n    {\n        delete[] tablica[w];\n    }\n\n    delete[] tablica;\n}\n\nint main()\n{\n    int wiersze = 3;\n    int kolumny = 2;\n    int** dane = utworzTablice(wiersze, kolumny);\n\n    dane[1][0] = 7;\n    cout << dane[1][0] << endl;\n\n    usunTablice(dane, wiersze);\n    dane = nullptr;\n    return 0;\n}\n```\n\nFunkcja usuwająca potrzebuje liczby wierszy. Liczba kolumn nie jest potrzebna do wykonania `delete[]` dla każdego wiersza."
        },
        {
          "id": "05-zadania",
          "title": "Zadania",
          "context": "Funkcja tworząca tablicę 2D",
          "kind": "tasks",
          "markdown": "1. Dodaj funkcje `wczytajTablice` i `wyswietlTablice` przyjmujące oba rozmiary."
        },
        {
          "id": "06-obliczenia-na-dynamicznej-macierzy",
          "title": "Obliczenia na dynamicznej macierzy",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\nint sumaWiersza(int** tablica, int wiersz, int kolumny)\n{\n    int suma = 0;\n\n    for (int k = 0; k < kolumny; k++)\n    {\n        suma += tablica[wiersz][k];\n    }\n\n    return suma;\n}\n```\n\nFunkcja zakłada, że `tablica` jest poprawna, a indeks wiersza mieści się w zakresie. Można analogicznie obliczyć sumę kolumny, przechodząc po wszystkich wierszach."
        },
        {
          "id": "07-zadania",
          "title": "Zadania",
          "context": "Obliczenia na dynamicznej macierzy",
          "kind": "tasks",
          "markdown": "1. Napisz funkcję `sumaKolumny`.\n2. Napisz funkcję wyszukującą największy element całej tablicy."
        },
        {
          "id": "08-wiersze-roznej-d-ugosci",
          "title": "Wiersze różnej długości",
          "context": "",
          "kind": "theory",
          "markdown": "Ponieważ każdy wiersz jest tworzony osobno, może mieć inny rozmiar.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int liczba_wierszy = 3;\n    int rozmiary[] = {2, 4, 1};\n    int** dane = new int*[liczba_wierszy];\n\n    for (int w = 0; w < liczba_wierszy; w++)\n    {\n        dane[w] = new int[rozmiary[w]]{};\n    }\n\n    dane[0][1] = 5;\n    dane[1][3] = 8;\n    dane[2][0] = 2;\n\n    for (int w = 0; w < liczba_wierszy; w++)\n    {\n        for (int k = 0; k < rozmiary[w]; k++)\n        {\n            cout << dane[w][k] << ' ';\n        }\n\n        cout << endl;\n        delete[] dane[w];\n    }\n\n    delete[] dane;\n    dane = nullptr;\n    return 0;\n}\n```\n\nTaki układ nazywa się czasem tablicą postrzępioną. Trzeba osobno pamiętać długość każdego wiersza."
        },
        {
          "id": "09-zadania",
          "title": "Zadania",
          "context": "Wiersze różnej długości",
          "kind": "tasks",
          "markdown": "1. Zmień rozmiary wierszy i wpisz co najmniej jedną wartość do każdego z nich."
        },
        {
          "id": "10-jeden-ciag-y-blok-pamieci",
          "title": "Jeden ciągły blok pamięci",
          "context": "",
          "kind": "theory",
          "markdown": "Alternatywą jest pojedyncza dynamiczna tablica o rozmiarze `wiersze * kolumny`. Element `[w][k]` odpowiada indeksowi `w * kolumny + k`.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int wiersze = 2;\n    int kolumny = 3;\n    int* dane = new int[wiersze * kolumny]{};\n\n    for (int w = 0; w < wiersze; w++)\n    {\n        for (int k = 0; k < kolumny; k++)\n        {\n            dane[w * kolumny + k] = w + k;\n            cout << dane[w * kolumny + k] << ' ';\n        }\n\n        cout << endl;\n    }\n\n    delete[] dane;\n    dane = nullptr;\n    return 0;\n}\n```\n\nTen wariant zajmuje jeden ciągły blok i wymaga tylko jednego `delete[]`, ale indeks jest mniej czytelny."
        },
        {
          "id": "11-zadania",
          "title": "Zadania",
          "context": "Jeden ciągły blok pamięci",
          "kind": "tasks",
          "markdown": "1. Oblicz sumę wszystkich elementów ciągłego wariantu tablicy."
        },
        {
          "id": "12-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Wczytaj liczbę wierszy i kolumn, utwórz dynamiczną tablicę 2D, wczytaj elementy, wyświetl je oraz poprawnie zwolnij całą pamięć.\n2. Napisz funkcje tworzącą, wczytującą, wyświetlającą i usuwającą dynamiczną tablicę 2D. W `main` oblicz sumę każdego wiersza.\n3. Utwórz dwie dynamiczne macierze o tych samych wymiarach i trzecią przechowującą ich sumę. Zadbaj o zwolnienie wszystkich wierszy wszystkich macierzy.\n4. Zrealizuj tablicę 2D jako jeden ciągły blok pamięci i napisz funkcję zwracającą największą wartość. Funkcja ma otrzymać wskaźnik, liczbę wierszy i liczbę kolumn."
        }
      ]
    },
    {
      "number": 24,
      "id": "sprawdzian-24",
      "kind": "exam",
      "title": "Sprawdzian IV",
      "sourceFile": "24_sprawdzian_iv_lekcje_1_23.md",
      "exam": {
        "duration": "45 minut",
        "points": 20,
        "sourceScope": "materiał z lekcji 1–23",
        "topics": [
          {
            "number": 19,
            "title": "wskaźniki i tablice"
          },
          {
            "number": 20,
            "title": "argumenty funkcji: wartość, wskaźnik i referencja"
          },
          {
            "number": 21,
            "title": "dynamiczna alokacja pamięci"
          },
          {
            "number": 22,
            "title": "dynamiczne tablice jednowymiarowe"
          },
          {
            "number": 23,
            "title": "dynamiczne tablice wielowymiarowe"
          }
        ]
      },
      "sections": []
    },
    {
      "number": 25,
      "id": "lekcja-25",
      "kind": "lesson",
      "title": "pliki i strumienie",
      "sourceFile": "25_pliki_tekstowe_i_strumienie.md",
      "checksum": "c27ac1506d17",
      "sections": [
        {
          "id": "01-czym-jest-strumien",
          "title": "Czym jest strumień",
          "context": "",
          "kind": "theory",
          "markdown": "Strumień jest przepływem danych między programem a źródłem albo miejscem docelowym. Korzystaliśmy już z trzech standardowych strumieni:\n\n- `cin` – standardowe wejście, zwykle klawiatura;\n- `cout` – standardowe wyjście, zwykle konsola;\n- `cerr` – strumień błędów, zwykle także konsola.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    cout << \"Zwykly komunikat\" << endl;\n    cerr << \"Komunikat bledu\" << endl;\n    return 0;\n}\n```\n\nOddzielny strumień błędów pozwala przekierować normalne wyniki i błędy do innych miejsc."
        },
        {
          "id": "02-zadania",
          "title": "Zadania",
          "context": "Czym jest strumień",
          "kind": "tasks",
          "markdown": "1. Wyświetl wynik obliczenia przez `cout`, a informację o próbie dzielenia przez zero przez `cerr`."
        },
        {
          "id": "03-plik-tekstowy-i-binarny",
          "title": "Plik tekstowy i binarny",
          "context": "",
          "kind": "theory",
          "markdown": "Plik tekstowy zawiera znaki możliwe do odczytania w edytorze tekstu. Liczby są w nim zapisane jako ciągi cyfr. Plik binarny przechowuje bajty w formacie ustalonym przez program. Na tej lekcji korzystamy z plików tekstowych.\n\nNagłówek `<fstream>` udostępnia trzy klasy strumieni plikowych:\n\n- `ofstream` – zapis do pliku;\n- `ifstream` – odczyt z pliku;\n- `fstream` – odczyt i zapis."
        },
        {
          "id": "04-zapis-do-pliku",
          "title": "Zapis do pliku",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <fstream>\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    ofstream plik(\"wyniki.txt\");\n\n    if (!plik.is_open())\n    {\n        cerr << \"Nie udalo sie otworzyc pliku.\" << endl;\n        return 1;\n    }\n\n    plik << \"Ala\" << endl;\n    plik << 17 << ' ' << 92.5 << endl;\n\n    plik.close();\n    return 0;\n}\n```\n\nDomyślne otwarcie `ofstream` usuwa poprzednią zawartość pliku. Operator `<<` działa podobnie jak dla `cout`, ale dane trafiają do pliku.\n\n`close()` zamyka plik. Obiekt zamknąłby go także automatycznie przy końcu swojego bloku, ale jawne zamknięcie wyraźnie pokazuje moment zakończenia zapisu."
        },
        {
          "id": "05-zadania",
          "title": "Zadania",
          "context": "Zapis do pliku",
          "kind": "tasks",
          "markdown": "1. Zapisz do pliku liczby od `1` do `10`, każdą w osobnym wierszu.\n2. Dodaj informację o sumie tych liczb."
        },
        {
          "id": "06-odczyt-wartosci-rozdzielonych-bia-ymi-znakami",
          "title": "Odczyt wartości rozdzielonych białymi znakami",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <fstream>\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main()\n{\n    ifstream plik(\"wyniki.txt\");\n\n    if (!plik)\n    {\n        cerr << \"Nie udalo sie otworzyc pliku.\" << endl;\n        return 1;\n    }\n\n    string imie;\n    int wiek = 0;\n    double wynik = 0.0;\n\n    plik >> imie >> wiek >> wynik;\n\n    if (plik)\n    {\n        cout << imie << ' ' << wiek << ' ' << wynik << endl;\n    }\n    else\n    {\n        cerr << \"Nieprawidlowe dane w pliku.\" << endl;\n    }\n\n    return 0;\n}\n```\n\nWarunek `if (plik)` sprawdza stan strumienia. Odczyt może się nie udać z powodu końca pliku albo danych niezgodnych z oczekiwanym typem."
        },
        {
          "id": "07-zadania",
          "title": "Zadania",
          "context": "Odczyt wartości rozdzielonych białymi znakami",
          "kind": "tasks",
          "markdown": "1. Zmień format pliku tak, aby zawierał dwie osoby, i odczytaj obie za pomocą pętli."
        },
        {
          "id": "08-poprawna-petla-odczytujaca-do-konca-pliku",
          "title": "Poprawna pętla odczytująca do końca pliku",
          "context": "",
          "kind": "theory",
          "markdown": "Nie używamy warunku `while (!plik.eof())`, ponieważ koniec pliku zostaje wykryty dopiero po nieudanej próbie odczytu. Poprawnie umieszczamy sam odczyt w warunku pętli.\n\n```cpp\n#include <fstream>\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    ifstream plik(\"liczby.txt\");\n\n    if (!plik)\n    {\n        cerr << \"Blad otwarcia.\" << endl;\n        return 1;\n    }\n\n    int liczba = 0;\n    int suma = 0;\n\n    while (plik >> liczba)\n    {\n        suma += liczba;\n    }\n\n    cout << \"Suma: \" << suma << endl;\n    return 0;\n}\n```\n\nPętla wykonuje się tylko dla poprawnie wczytanej liczby."
        },
        {
          "id": "09-zadania",
          "title": "Zadania",
          "context": "Poprawna pętla odczytująca do końca pliku",
          "kind": "tasks",
          "markdown": "1. Policz liczbę wartości w pliku i oblicz średnią. Obsłuż pusty plik."
        },
        {
          "id": "10-odczyt-ca-ych-wierszy",
          "title": "Odczyt całych wierszy",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <fstream>\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main()\n{\n    ifstream plik(\"notatki.txt\");\n\n    if (!plik)\n    {\n        cerr << \"Blad otwarcia.\" << endl;\n        return 1;\n    }\n\n    string wiersz;\n    int numer = 1;\n\n    while (getline(plik, wiersz))\n    {\n        cout << numer << \": \" << wiersz << endl;\n        numer++;\n    }\n\n    return 0;\n}\n```\n\n`getline` działa z `ifstream` tak samo jak z `cin` i zachowuje spacje znajdujące się w wierszu."
        },
        {
          "id": "11-zadania",
          "title": "Zadania",
          "context": "Odczyt całych wierszy",
          "kind": "tasks",
          "markdown": "1. Policz wiersze i wyświetl tylko te, które nie są puste."
        },
        {
          "id": "12-dopisywanie-na-koncu-pliku",
          "title": "Dopisywanie na końcu pliku",
          "context": "",
          "kind": "theory",
          "markdown": "Tryb `ios::app` powoduje dopisywanie nowych danych na końcu bez usuwania wcześniejszej zawartości.\n\n```cpp\n#include <fstream>\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nint main()\n{\n    string wpis;\n    cout << \"Podaj wpis: \";\n    getline(cin, wpis);\n\n    ofstream plik(\"dziennik.txt\", ios::app);\n\n    if (!plik)\n    {\n        cerr << \"Blad otwarcia.\" << endl;\n        return 1;\n    }\n\n    plik << wpis << endl;\n    return 0;\n}\n```\n\nKażde uruchomienie dopisze kolejny wiersz."
        },
        {
          "id": "13-zadania",
          "title": "Zadania",
          "context": "Dopisywanie na końcu pliku",
          "kind": "tasks",
          "markdown": "1. Dopisuj do pliku imię i wynik podane przez użytkownika."
        },
        {
          "id": "14-tryby-otwarcia",
          "title": "Tryby otwarcia",
          "context": "",
          "kind": "theory",
          "markdown": "Najczęściej używane tryby to:\n\n- `ios::in` – odczyt;\n- `ios::out` – zapis;\n- `ios::app` – każdy zapis na końcu;\n- `ios::trunc` – usunięcie wcześniejszej zawartości;\n- `ios::binary` – tryb binarny.\n\nTryby można łączyć operatorem `|`, na przykład:\n\n```cpp\nfstream plik(\"dane.txt\", ios::in | ios::out);\n```\n\nPozycję w strumieniu wejściowym można odczytać przez `tellg()` i zmienić przez `seekg()`. Dla strumienia wyjściowego służą do tego `tellp()` i `seekp()`. W plikach tekstowych najczęściej wystarcza odczyt sekwencyjny od początku do końca."
        },
        {
          "id": "15-zadania",
          "title": "Zadania",
          "context": "Tryby otwarcia",
          "kind": "tasks",
          "markdown": "1. Otwórz istniejący plik przez `fstream` do odczytu i zapisu, a następnie sprawdź, czy otwarcie się udało."
        },
        {
          "id": "16-zapis-i-odczyt-binarny",
          "title": "Zapis i odczyt binarny",
          "context": "",
          "kind": "theory",
          "markdown": "W trybie binarnym zapisujemy bajty obiektu za pomocą metody `write`, a odczytujemy je za pomocą `read`. Obie metody otrzymują adres obszaru pamięci zapisany jako wskaźnik do `char` oraz liczbę bajtów.\n\n```cpp\n#include <fstream>\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    int zapisane[3] = {10, 20, 30};\n\n    ofstream wyjscie(\"liczby.bin\", ios::binary);\n\n    if (!wyjscie)\n    {\n        cerr << \"Blad otwarcia do zapisu.\" << endl;\n        return 1;\n    }\n\n    wyjscie.write(\n        reinterpret_cast<const char*>(zapisane),\n        sizeof(zapisane)\n    );\n    wyjscie.close();\n\n    int odczytane[3] = {};\n    ifstream wejscie(\"liczby.bin\", ios::binary);\n\n    if (!wejscie)\n    {\n        cerr << \"Blad otwarcia do odczytu.\" << endl;\n        return 1;\n    }\n\n    wejscie.read(\n        reinterpret_cast<char*>(odczytane),\n        sizeof(odczytane)\n    );\n\n    if (!wejscie)\n    {\n        cerr << \"Nie odczytano wszystkich danych.\" << endl;\n        return 1;\n    }\n\n    for (int liczba : odczytane)\n    {\n        cout << liczba << ' ';\n    }\n\n    cout << endl;\n    return 0;\n}\n```\n\nTaki prosty zapis wartości zależy od rozmiaru typów i sposobu zapisu bajtów na danej platformie. Nie jest dobrym formatem do wymiany plików między dowolnymi komputerami. Nie zapisujemy w ten sposób bezpośrednio obiektów zawierających `string` ani wskaźniki."
        },
        {
          "id": "17-zadania",
          "title": "Zadania",
          "context": "Zapis i odczyt binarny",
          "kind": "tasks",
          "markdown": "1. Zmień program tak, aby zapisywał i odczytywał pięć wartości typu `double`."
        },
        {
          "id": "18-pozycja-w-pliku",
          "title": "Pozycja w pliku",
          "context": "",
          "kind": "theory",
          "markdown": "`seekg` ustawia pozycję odczytu, a `tellg` ją zwraca. Odpowiednikami dla zapisu są `seekp` i `tellp`.\n\n```cpp\n#include <fstream>\n#include <iostream>\n\nusing namespace std;\n\nint main()\n{\n    ifstream plik(\"liczby.bin\", ios::binary | ios::ate);\n\n    if (!plik)\n    {\n        cerr << \"Blad otwarcia.\" << endl;\n        return 1;\n    }\n\n    streampos rozmiar = plik.tellg();\n    cout << \"Rozmiar pliku w bajtach: \" << rozmiar << endl;\n\n    plik.seekg(0, ios::beg);\n    return 0;\n}\n```\n\nTryb `ios::ate` otwiera plik i od razu ustawia pozycję na jego końcu. Pozycję można liczyć od `ios::beg`, `ios::cur` albo `ios::end`.\n\nNazwę pliku można zmienić funkcją `rename`, a plik usunąć funkcją `remove` z nagłówka `<cstdio>`. Są to operacje zmieniające system plików, dlatego przed ich użyciem trzeba dokładnie sprawdzić nazwę i upewnić się, że wskazano właściwy plik."
        },
        {
          "id": "19-zadania",
          "title": "Zadania",
          "context": "Pozycja w pliku",
          "kind": "tasks",
          "markdown": "1. Odczytaj rozmiar utworzonego pliku binarnego i porównaj go z wynikiem `sizeof` zapisanej tablicy."
        },
        {
          "id": "20-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Wczytuj liczby całkowite od użytkownika i zapisz je do pliku `liczby.txt`. Następnie otwórz plik do odczytu, policz elementy, sumę, minimum i maksimum.\n2. Napisz program dopisujący do pliku `uczniowie.txt` imię, nazwisko i wynik. Druga część programu ma odczytać i wyświetlić wszystkie rekordy.\n3. Napisz program kopiujący plik tekstowy wiersz po wierszu do nowego pliku. Dodaj numery wierszy.\n4. Wczytaj z pliku tekstowego dowolną liczbę wierszy. Wyświetl najdłuższy wiersz oraz jego długość. Poprawnie obsłuż błąd otwarcia i pusty plik."
        }
      ]
    },
    {
      "number": 26,
      "id": "lekcja-26",
      "kind": "lesson",
      "title": "łączenie struktur, funkcji i pamięci dynamicznej",
      "sourceFile": "26_laczenie_struktur_funkcji_i_pamieci_dynamicznej.md",
      "checksum": "23c8ebd40255",
      "sections": [
        {
          "id": "01-jeden-program-wiele-poznanych-elementow",
          "title": "Jeden program, wiele poznanych elementów",
          "context": "",
          "kind": "theory",
          "markdown": "Większy program dzielimy na typ danych i małe funkcje o jednym zadaniu. W tym arkuszu zbudujemy dynamiczny rejestr produktów. Każdy produkt jest strukturą, a liczba produktów może rosnąć podczas działania programu.\n\n```cpp\nstruct Produkt\n{\n    string nazwa;\n    double cena;\n    int liczba_sztuk;\n};\n```\n\nDynamiczna tablica `Produkt*` przechowuje rekordy w jednym ciągłym bloku pamięci."
        },
        {
          "id": "02-wyswietlanie-i-obliczanie-wartosci",
          "title": "Wyświetlanie i obliczanie wartości",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nstruct Produkt\n{\n    string nazwa;\n    double cena;\n    int liczba_sztuk;\n};\n\ndouble wartosc(const Produkt& produkt)\n{\n    return produkt.cena * produkt.liczba_sztuk;\n}\n\nvoid wyswietl(const Produkt* produkty, int rozmiar)\n{\n    for (int i = 0; i < rozmiar; i++)\n    {\n        cout << i << \". \" << produkty[i].nazwa << \": \"\n             << wartosc(produkty[i]) << endl;\n    }\n}\n\nint main()\n{\n    Produkt produkty[2] = {\n        {\"Dlugopis\", 4.0, 3},\n        {\"Zeszyt\", 8.5, 2}\n    };\n\n    wyswietl(produkty, 2);\n    return 0;\n}\n```\n\nStała referencja zapobiega kopiowaniu jednego produktu, a wskaźnik `const Produkt*` pozwala odczytać tablicę bez zmieniania jej elementów."
        },
        {
          "id": "03-zadania",
          "title": "Zadania",
          "context": "Wyświetlanie i obliczanie wartości",
          "kind": "tasks",
          "markdown": "1. Napisz funkcję zwracającą łączną wartość wszystkich produktów."
        },
        {
          "id": "04-powiekszanie-tablicy-o-jeden-element",
          "title": "Powiększanie tablicy o jeden element",
          "context": "",
          "kind": "theory",
          "markdown": "Funkcja dodająca rekord musi zmienić zarówno wskaźnik na tablicę, jak i jej rozmiar. Dlatego przyjmuje je przez referencję.\n\n```cpp\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nstruct Produkt\n{\n    string nazwa;\n    double cena;\n    int liczba_sztuk;\n};\n\nvoid dodaj(Produkt*& produkty, int& rozmiar, const Produkt& nowy)\n{\n    Produkt* wieksza = new Produkt[rozmiar + 1];\n\n    for (int i = 0; i < rozmiar; i++)\n    {\n        wieksza[i] = produkty[i];\n    }\n\n    wieksza[rozmiar] = nowy;\n\n    delete[] produkty;\n    produkty = wieksza;\n    rozmiar++;\n}\n\nint main()\n{\n    Produkt* produkty = nullptr;\n    int rozmiar = 0;\n\n    dodaj(produkty, rozmiar, {\"Mysz\", 70.0, 2});\n    dodaj(produkty, rozmiar, {\"Klawiatura\", 120.0, 1});\n\n    for (int i = 0; i < rozmiar; i++)\n    {\n        cout << produkty[i].nazwa << endl;\n    }\n\n    delete[] produkty;\n    produkty = nullptr;\n    return 0;\n}\n```\n\n`Produkt*&` jest referencją do wskaźnika. Dzięki temu przypisanie `produkty = wieksza` zmienia wskaźnik znajdujący się w `main`.\n\n`new Produkt[1]` działa poprawnie, gdy stara tablica jest pusta, a pętla kopiująca wykonuje zero iteracji. `delete[] nullptr` także jest bezpieczne."
        },
        {
          "id": "05-zadania",
          "title": "Zadania",
          "context": "Powiększanie tablicy o jeden element",
          "kind": "tasks",
          "markdown": "1. Po każdym dodaniu wyświetl aktualny rozmiar.\n2. Dodaj trzeci produkt wczytany od użytkownika."
        },
        {
          "id": "06-wyszukiwanie-rekordu",
          "title": "Wyszukiwanie rekordu",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\nint znajdz(const Produkt* produkty, int rozmiar, const string& nazwa)\n{\n    for (int i = 0; i < rozmiar; i++)\n    {\n        if (produkty[i].nazwa == nazwa)\n        {\n            return i;\n        }\n    }\n\n    return -1;\n}\n```\n\nFunkcja zwraca indeks pierwszego pasującego produktu albo `-1`. Wynik trzeba sprawdzić przed użyciem jako indeks."
        },
        {
          "id": "07-zadania",
          "title": "Zadania",
          "context": "Wyszukiwanie rekordu",
          "kind": "tasks",
          "markdown": "1. Wczytaj nazwę, znajdź produkt i zwiększ jego liczbę sztuk. Jeśli produktu nie ma, wyświetl komunikat."
        },
        {
          "id": "08-usuwanie-elementu-o-podanym-indeksie",
          "title": "Usuwanie elementu o podanym indeksie",
          "context": "",
          "kind": "theory",
          "markdown": "Nowa tablica ma o jeden element mniej. Kopiujemy wszystkie rekordy poza usuwanym.\n\n```cpp\nbool usun(Produkt*& produkty, int& rozmiar, int indeks)\n{\n    if (indeks < 0 || indeks >= rozmiar)\n    {\n        return false;\n    }\n\n    Produkt* mniejsza = nullptr;\n\n    if (rozmiar > 1)\n    {\n        mniejsza = new Produkt[rozmiar - 1];\n    }\n\n    int cel = 0;\n\n    for (int i = 0; i < rozmiar; i++)\n    {\n        if (i != indeks)\n        {\n            mniejsza[cel] = produkty[i];\n            cel++;\n        }\n    }\n\n    delete[] produkty;\n    produkty = mniejsza;\n    rozmiar--;\n    return true;\n}\n```\n\nPo usunięciu ostatniego produktu wskaźnik znów ma wartość `nullptr`, a rozmiar wynosi `0`."
        },
        {
          "id": "09-zadania",
          "title": "Zadania",
          "context": "Usuwanie elementu o podanym indeksie",
          "kind": "tasks",
          "markdown": "1. Wywołaj funkcję dla poprawnego i niepoprawnego indeksu. Sprawdź zwróconą wartość."
        },
        {
          "id": "10-zapis-rejestru-do-pliku",
          "title": "Zapis rejestru do pliku",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <fstream>\n\nbool zapisz(const Produkt* produkty, int rozmiar, const string& nazwa_pliku)\n{\n    ofstream plik(nazwa_pliku);\n\n    if (!plik)\n    {\n        return false;\n    }\n\n    for (int i = 0; i < rozmiar; i++)\n    {\n        plik << produkty[i].nazwa << ';'\n             << produkty[i].cena << ';'\n             << produkty[i].liczba_sztuk << endl;\n    }\n\n    return true;\n}\n```\n\nŚrednik rozdziela pola jednego rekordu. Wybrany format zakłada, że nazwa nie zawiera średnika. Projektując plik, zawsze trzeba ustalić sposób rozdzielania i interpretacji danych."
        },
        {
          "id": "11-zadania",
          "title": "Zadania",
          "context": "Zapis rejestru do pliku",
          "kind": "tasks",
          "markdown": "1. Dodaj wywołanie funkcji i komunikat zależny od wyniku zapisu."
        },
        {
          "id": "12-odpowiedzialnosc-za-pamiec",
          "title": "Odpowiedzialność za pamięć",
          "context": "",
          "kind": "theory",
          "markdown": "W całym programie musi istnieć jasna odpowiedź na pytania:\n\n- która funkcja tworzy tablicę;\n- która funkcja może zmienić jej adres i rozmiar;\n- która część programu wykonuje końcowe `delete[]`;\n- czy po operacji rozmiar i wskaźnik nadal opisują ten sam zbiór danych."
        },
        {
          "id": "13-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Dokończ program rejestru produktów: dodawanie, wyświetlanie, wyszukiwanie, usuwanie i zapis do pliku. Obsługuj operacje za pomocą menu `switch`.\n2. Napisz dynamiczny rejestr uczniów. Struktura ma zawierać imię i wynik. Dodawaj rekordy przez powiększanie tablicy, wyświetl średnią oraz najlepszego ucznia.\n3. Rozbuduj jeden z rejestrów o odczyt danych z pliku. Najpierw policz poprawne rekordy, utwórz tablicę odpowiedniego rozmiaru, a następnie ponownie otwórz plik i wczytaj dane."
        }
      ]
    },
    {
      "number": 27,
      "id": "lekcja-27",
      "kind": "lesson",
      "title": "lista jednokierunkowa",
      "sourceFile": "27_lista_jednokierunkowa.md",
      "checksum": "4a2bedffab6c",
      "sections": [
        {
          "id": "01-tablica-a-lista",
          "title": "Tablica a lista",
          "context": "",
          "kind": "theory",
          "markdown": "Elementy tablicy zajmują jeden ciągły blok pamięci. Elementy listy mogą znajdować się w różnych miejscach. Każdy element listy przechowuje wartość oraz wskaźnik prowadzący do następnego elementu.\n\n```cpp\nstruct Wezel\n{\n    int wartosc;\n    Wezel* nastepny;\n};\n```\n\nPojedynczy element nazywamy węzłem. Wskaźnik na pierwszy węzeł jest głową listy. Ostatni węzeł ma `nastepny == nullptr`. Pusta lista ma `glowa == nullptr`."
        },
        {
          "id": "02-dodawanie-na-poczatek",
          "title": "Dodawanie na początek",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\nWezel* dodajNaPoczatek(Wezel* glowa, int wartosc)\n{\n    Wezel* nowy = new Wezel{wartosc, glowa};\n    return nowy;\n}\n```\n\nKolejność działań jest następująca:\n\n1. powstaje nowy węzeł;\n2. jego pole `nastepny` otrzymuje adres dotychczasowej głowy;\n3. adres nowego węzła staje się nową głową.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nstruct Wezel\n{\n    int wartosc;\n    Wezel* nastepny;\n};\n\nWezel* dodajNaPoczatek(Wezel* glowa, int wartosc)\n{\n    return new Wezel{wartosc, glowa};\n}\n\nint main()\n{\n    Wezel* glowa = nullptr;\n\n    glowa = dodajNaPoczatek(glowa, 3);\n    glowa = dodajNaPoczatek(glowa, 5);\n    glowa = dodajNaPoczatek(glowa, 8);\n\n    cout << glowa->wartosc << endl;\n\n    while (glowa != nullptr)\n    {\n        Wezel* usuwany = glowa;\n        glowa = glowa->nastepny;\n        delete usuwany;\n    }\n\n    return 0;\n}\n```\n\nPo dodaniu `3`, `5`, `8` lista ma kolejność `8 -> 5 -> 3`."
        },
        {
          "id": "03-zadania",
          "title": "Zadania",
          "context": "Dodawanie na początek",
          "kind": "tasks",
          "markdown": "1. Narysuj na kartce trzy węzły i wszystkie wskaźniki po każdym dodaniu.\n2. Dodaj liczbę `10` i przewidź nową kolejność."
        },
        {
          "id": "04-drugi-sposob-zmiany-g-owy",
          "title": "Drugi sposób zmiany głowy",
          "context": "",
          "kind": "theory",
          "markdown": "Funkcja może zamiast zwracania nowej głowy przyjąć referencję do wskaźnika.\n\n```cpp\nvoid dodajNaPoczatek(Wezel*& glowa, int wartosc)\n{\n    glowa = new Wezel{wartosc, glowa};\n}\n```\n\nObie wersje są poprawne. W całym programie warto konsekwentnie stosować jeden wybrany sposób."
        },
        {
          "id": "05-zadania",
          "title": "Zadania",
          "context": "Drugi sposób zmiany głowy",
          "kind": "tasks",
          "markdown": "1. Zmień poprzedni program tak, aby używał wersji z `Wezel*&`."
        },
        {
          "id": "06-przechodzenie-i-wyswietlanie-listy",
          "title": "Przechodzenie i wyświetlanie listy",
          "context": "",
          "kind": "theory",
          "markdown": "Nie zmieniamy głowy podczas zwykłego odczytu. Używamy wskaźnika pomocniczego.\n\n```cpp\nvoid wyswietl(const Wezel* glowa)\n{\n    const Wezel* obecny = glowa;\n\n    while (obecny != nullptr)\n    {\n        cout << obecny->wartosc << ' ';\n        obecny = obecny->nastepny;\n    }\n\n    cout << endl;\n}\n```\n\n`const Wezel*` nie pozwala zmieniać węzłów przez wskaźnik używany do wyświetlania."
        },
        {
          "id": "07-zadania",
          "title": "Zadania",
          "context": "Przechodzenie i wyświetlanie listy",
          "kind": "tasks",
          "markdown": "1. Napisz funkcję `rozmiar`, która zwróci liczbę węzłów.\n2. Napisz funkcję `suma`, która zwróci sumę wartości."
        },
        {
          "id": "08-wyszukiwanie",
          "title": "Wyszukiwanie",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\nconst Wezel* znajdz(const Wezel* glowa, int szukana)\n{\n    const Wezel* obecny = glowa;\n\n    while (obecny != nullptr)\n    {\n        if (obecny->wartosc == szukana)\n        {\n            return obecny;\n        }\n\n        obecny = obecny->nastepny;\n    }\n\n    return nullptr;\n}\n```\n\nWynik różny od `nullptr` wskazuje pierwszy pasujący węzeł."
        },
        {
          "id": "09-zadania",
          "title": "Zadania",
          "context": "Wyszukiwanie",
          "kind": "tasks",
          "markdown": "1. Użyj funkcji w instrukcji `if` i wyświetl informację, czy liczba istnieje."
        },
        {
          "id": "10-dodawanie-na-koncu",
          "title": "Dodawanie na końcu",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\nvoid dodajNaKoniec(Wezel*& glowa, int wartosc)\n{\n    Wezel* nowy = new Wezel{wartosc, nullptr};\n\n    if (glowa == nullptr)\n    {\n        glowa = nowy;\n        return;\n    }\n\n    Wezel* obecny = glowa;\n\n    while (obecny->nastepny != nullptr)\n    {\n        obecny = obecny->nastepny;\n    }\n\n    obecny->nastepny = nowy;\n}\n```\n\nOsobno obsługujemy pustą listę. W pozostałych przypadkach dochodzimy do węzła, którego `nastepny` jest pusty."
        },
        {
          "id": "11-zadania",
          "title": "Zadania",
          "context": "Dodawanie na końcu",
          "kind": "tasks",
          "markdown": "1. Dodaj kolejno `2`, `4`, `6` na koniec pustej listy i narysuj wynik."
        },
        {
          "id": "12-usuwanie-z-poczatku",
          "title": "Usuwanie z początku",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\nbool usunZPoczatku(Wezel*& glowa)\n{\n    if (glowa == nullptr)\n    {\n        return false;\n    }\n\n    Wezel* usuwany = glowa;\n    glowa = glowa->nastepny;\n    delete usuwany;\n    return true;\n}\n```\n\nNajpierw zachowujemy adres usuwanego węzła, potem przesuwamy głowę i dopiero wtedy wykonujemy `delete`."
        },
        {
          "id": "13-zadania",
          "title": "Zadania",
          "context": "Usuwanie z początku",
          "kind": "tasks",
          "markdown": "1. Wywołaj funkcję dla listy pustej i niepustej. Sprawdź zwrócony wynik."
        },
        {
          "id": "14-usuwanie-z-konca",
          "title": "Usuwanie z końca",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\nbool usunZKonca(Wezel*& glowa)\n{\n    if (glowa == nullptr)\n    {\n        return false;\n    }\n\n    if (glowa->nastepny == nullptr)\n    {\n        delete glowa;\n        glowa = nullptr;\n        return true;\n    }\n\n    Wezel* poprzedni = glowa;\n    Wezel* ostatni = glowa->nastepny;\n\n    while (ostatni->nastepny != nullptr)\n    {\n        poprzedni = ostatni;\n        ostatni = ostatni->nastepny;\n    }\n\n    poprzedni->nastepny = nullptr;\n    delete ostatni;\n    return true;\n}\n```\n\nPrzypadek jednego węzła wymaga osobnej obsługi. Przy dłuższej liście potrzebujemy adresu ostatniego węzła oraz jego poprzednika."
        },
        {
          "id": "15-zadania",
          "title": "Zadania",
          "context": "Usuwanie z końca",
          "kind": "tasks",
          "markdown": "1. Rozpisz działanie funkcji dla listy `4 -> 5 -> 3`."
        },
        {
          "id": "16-usuwanie-ca-ej-listy",
          "title": "Usuwanie całej listy",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\nvoid usunListe(Wezel*& glowa)\n{\n    while (glowa != nullptr)\n    {\n        Wezel* usuwany = glowa;\n        glowa = glowa->nastepny;\n        delete usuwany;\n    }\n}\n```\n\nPo funkcji głowa ma wartość `nullptr`. Każdy węzeł ma dokładnie jedno odpowiadające mu `delete`."
        },
        {
          "id": "17-lista-dwukierunkowa-i-cykliczna",
          "title": "Lista dwukierunkowa i cykliczna",
          "context": "",
          "kind": "theory",
          "markdown": "Węzeł listy dwukierunkowej zawiera także wskaźnik do poprzednika. Ułatwia to poruszanie się w obie strony, ale każda operacja musi poprawnie ustawić więcej połączeń.\n\nW liście cyklicznej ostatni element wskazuje pierwszy zamiast `nullptr`. Zwykła pętla oczekująca `nullptr` nie zadziała dla takiej listy — warunek zakończenia musi wykryć powrót do początku."
        },
        {
          "id": "18-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Zbuduj listę jednokierunkową z funkcjami: dodawanie na początku, wyświetlanie, liczenie elementów i usuwanie całej listy.\n2. Dodaj funkcje `minimum` i `ileWystapien`, które przechodzą po liście bez zmieniania jej elementów.\n3. Napisz funkcje dodającą na końcu i usuwającą z końca. Przetestuj pustą listę, listę jednoelementową i dłuższą.\n4. Napisz funkcję usuwającą pierwsze wystąpienie wskazanej wartości. Zadbaj o przypadki: pusta lista, wartość w głowie, wartość dalej i brak wartości."
        }
      ]
    },
    {
      "number": 28,
      "id": "lekcja-28",
      "kind": "lesson",
      "title": "dynamiczny stos i kolejka",
      "sourceFile": "28_stos_i_kolejka_dynamiczna.md",
      "checksum": "b15644115f3d",
      "sections": [
        {
          "id": "01-stos-lifo",
          "title": "Stos LIFO",
          "context": "",
          "kind": "theory",
          "markdown": "LIFO oznacza „ostatni wszedł, pierwszy wyszedł”. Stos można porównać do stosu talerzy: dokładamy i zdejmujemy elementy na tym samym końcu, nazywanym wierzchołkiem.\n\nPodstawowe operacje stosu to:\n\n- `push` – dodanie elementu na wierzchołek;\n- `pop` – zdjęcie elementu z wierzchołka;\n- `top` – odczyt elementu bez usuwania;\n- sprawdzenie, czy stos jest pusty.\n\nStos dynamiczny można zbudować jak listę z operacjami na jej początku.\n\n```cpp\nstruct Wezel\n{\n    int wartosc;\n    Wezel* nastepny;\n};\n\nvoid push(Wezel*& wierzcholek, int wartosc)\n{\n    wierzcholek = new Wezel{wartosc, wierzcholek};\n}\n```"
        },
        {
          "id": "02-zadania",
          "title": "Zadania",
          "context": "Stos LIFO",
          "kind": "tasks",
          "markdown": "1. Narysuj stos po wykonaniu `push` dla wartości `3`, `5`, `8`."
        },
        {
          "id": "03-zdejmowanie-elementu-ze-stosu",
          "title": "Zdejmowanie elementu ze stosu",
          "context": "",
          "kind": "theory",
          "markdown": "Funkcja `pop` musi jednocześnie poinformować, czy operacja się udała, oraz przekazać zdjętą wartość. Zwraca `bool`, a wartość zapisuje przez referencję.\n\n```cpp\nbool pop(Wezel*& wierzcholek, int& wynik)\n{\n    if (wierzcholek == nullptr)\n    {\n        return false;\n    }\n\n    Wezel* usuwany = wierzcholek;\n    wynik = usuwany->wartosc;\n    wierzcholek = usuwany->nastepny;\n    delete usuwany;\n    return true;\n}\n```\n\nNie wolno odczytywać pola po `delete`, dlatego wynik zapisujemy wcześniej."
        },
        {
          "id": "04-zadania",
          "title": "Zadania",
          "context": "Zdejmowanie elementu ze stosu",
          "kind": "tasks",
          "markdown": "1. Ustal kolejność wartości zwracanych przez trzy wywołania `pop` po dodaniu `3`, `5`, `8`."
        },
        {
          "id": "05-pe-ny-przyk-ad-stosu",
          "title": "Pełny przykład stosu",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n\nusing namespace std;\n\nstruct Wezel\n{\n    int wartosc;\n    Wezel* nastepny;\n};\n\nvoid push(Wezel*& wierzcholek, int wartosc)\n{\n    wierzcholek = new Wezel{wartosc, wierzcholek};\n}\n\nbool pop(Wezel*& wierzcholek, int& wynik)\n{\n    if (wierzcholek == nullptr)\n    {\n        return false;\n    }\n\n    Wezel* usuwany = wierzcholek;\n    wynik = usuwany->wartosc;\n    wierzcholek = usuwany->nastepny;\n    delete usuwany;\n    return true;\n}\n\nvoid usunStos(Wezel*& wierzcholek)\n{\n    int pominieta = 0;\n\n    while (pop(wierzcholek, pominieta))\n    {\n    }\n}\n\nint main()\n{\n    Wezel* stos = nullptr;\n    push(stos, 3);\n    push(stos, 5);\n    push(stos, 8);\n\n    int wartosc = 0;\n\n    while (pop(stos, wartosc))\n    {\n        cout << wartosc << ' ';\n    }\n\n    cout << endl;\n    usunStos(stos);\n    return 0;\n}\n```\n\nProgram wyświetli `8 5 3`. Po pętli stos jest już pusty; dodatkowe `usunStos` pokazuje, że funkcja bezpiecznie obsługuje pustą strukturę."
        },
        {
          "id": "06-zadania",
          "title": "Zadania",
          "context": "Pełny przykład stosu",
          "kind": "tasks",
          "markdown": "1. Napisz funkcję `top`, która bez usuwania zapisze wartość wierzchołka w parametrze i zwróci informację o powodzeniu."
        },
        {
          "id": "07-kolejka-fifo",
          "title": "Kolejka FIFO",
          "context": "",
          "kind": "theory",
          "markdown": "FIFO oznacza „pierwszy wszedł, pierwszy wyszedł”. Elementy dodajemy na końcu kolejki, a usuwamy z początku.\n\nDo sprawnej obsługi przechowujemy dwa wskaźniki:\n\n- `poczatek` – element oczekujący najdłużej;\n- `koniec` – ostatnio dodany element.\n\nPusta kolejka ma oba wskaźniki równe `nullptr`.\n\n```cpp\nvoid enqueue(Wezel*& poczatek, Wezel*& koniec, int wartosc)\n{\n    Wezel* nowy = new Wezel{wartosc, nullptr};\n\n    if (koniec == nullptr)\n    {\n        poczatek = nowy;\n        koniec = nowy;\n        return;\n    }\n\n    koniec->nastepny = nowy;\n    koniec = nowy;\n}\n```\n\nGdy kolejka jest pusta, nowy węzeł jest jednocześnie początkiem i końcem. W pozostałych przypadkach dołączamy go za dotychczasowym końcem."
        },
        {
          "id": "08-zadania",
          "title": "Zadania",
          "context": "Kolejka FIFO",
          "kind": "tasks",
          "markdown": "1. Narysuj kolejkę po dodaniu `3`, `5`, `8` i zaznacz oba wskaźniki."
        },
        {
          "id": "09-usuwanie-z-kolejki",
          "title": "Usuwanie z kolejki",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\nbool dequeue(Wezel*& poczatek, Wezel*& koniec, int& wynik)\n{\n    if (poczatek == nullptr)\n    {\n        return false;\n    }\n\n    Wezel* usuwany = poczatek;\n    wynik = usuwany->wartosc;\n    poczatek = usuwany->nastepny;\n    delete usuwany;\n\n    if (poczatek == nullptr)\n    {\n        koniec = nullptr;\n    }\n\n    return true;\n}\n```\n\nPo usunięciu ostatniego elementu trzeba wyzerować także `koniec`. Inaczej wskazywałby zwolnioną pamięć."
        },
        {
          "id": "10-zadania",
          "title": "Zadania",
          "context": "Usuwanie z kolejki",
          "kind": "tasks",
          "markdown": "1. Wyjaśnij, dlaczego warunek po `delete` sprawdza `poczatek`, a nie pole usuniętego węzła."
        },
        {
          "id": "11-pe-ny-przyk-ad-kolejki",
          "title": "Pełny przykład kolejki",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n\nusing namespace std;\n\nstruct Wezel\n{\n    int wartosc;\n    Wezel* nastepny;\n};\n\nvoid enqueue(Wezel*& poczatek, Wezel*& koniec, int wartosc)\n{\n    Wezel* nowy = new Wezel{wartosc, nullptr};\n\n    if (koniec == nullptr)\n    {\n        poczatek = nowy;\n        koniec = nowy;\n        return;\n    }\n\n    koniec->nastepny = nowy;\n    koniec = nowy;\n}\n\nbool dequeue(Wezel*& poczatek, Wezel*& koniec, int& wynik)\n{\n    if (poczatek == nullptr)\n    {\n        return false;\n    }\n\n    Wezel* usuwany = poczatek;\n    wynik = usuwany->wartosc;\n    poczatek = usuwany->nastepny;\n    delete usuwany;\n\n    if (poczatek == nullptr)\n    {\n        koniec = nullptr;\n    }\n\n    return true;\n}\n\nint main()\n{\n    Wezel* poczatek = nullptr;\n    Wezel* koniec = nullptr;\n\n    enqueue(poczatek, koniec, 3);\n    enqueue(poczatek, koniec, 5);\n    enqueue(poczatek, koniec, 8);\n\n    int wartosc = 0;\n\n    while (dequeue(poczatek, koniec, wartosc))\n    {\n        cout << wartosc << ' ';\n    }\n\n    cout << endl;\n    return 0;\n}\n```\n\nProgram wyświetli `3 5 8`, czyli kolejność dodawania."
        },
        {
          "id": "12-zadania",
          "title": "Zadania",
          "context": "Pełny przykład kolejki",
          "kind": "tasks",
          "markdown": "1. Po usunięciu wszystkiego sprawdź, czy oba wskaźniki są równe `nullptr`."
        },
        {
          "id": "13-porownanie-struktur",
          "title": "Porównanie struktur",
          "context": "",
          "kind": "theory",
          "markdown": "- lista jednokierunkowa pozwala przechodzić po danych i wykonywać operacje w różnych miejscach;\n- stos udostępnia jeden koniec i działa jako LIFO;\n- kolejka udostępnia początek do usuwania i koniec do dodawania, działając jako FIFO;\n- każda dynamiczna wersja musi zwolnić wszystkie utworzone węzły.\n\nStos przydaje się między innymi przy cofaniu operacji i analizie nawiasów. Kolejka przydaje się przy obsłudze zadań w kolejności zgłoszeń."
        },
        {
          "id": "14-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Zaimplementuj dynamiczny stos z funkcjami `push`, `pop`, `top` i `usunStos`. Przetestuj także próbę zdjęcia elementu z pustego stosu.\n2. Zaimplementuj dynamiczną kolejkę z funkcjami `enqueue`, `dequeue` i funkcją usuwającą wszystkie pozostałe elementy.\n3. Za pomocą stosu odwróć kolejność pięciu liczb wczytanych od użytkownika: dodaj je przez `push`, a następnie wyświetl przez kolejne `pop`.\n4. Zasymuluj kolejkę klientów. Każdy węzeł ma przechowywać strukturę z imieniem i numerem. Dodaj klientów, a następnie obsłuż ich w kolejności FIFO."
        }
      ]
    },
    {
      "number": 29,
      "id": "lekcja-29",
      "kind": "lesson",
      "title": "podstawy programowania obiektowego",
      "sourceFile": "29_podstawy_programowania_obiektowego.md",
      "checksum": "b871f17877ab",
      "sections": [
        {
          "id": "01-obiekt-i-klasa",
          "title": "Obiekt i klasa",
          "context": "",
          "kind": "theory",
          "markdown": "Programowanie obiektowe łączy dane oraz operacje na nich w jednym typie. Klasa jest opisem typu, a obiekt jest konkretną wartością tego typu.\n\n```cpp\nclass Prostokat\n{\npublic:\n    double szerokosc;\n    double wysokosc;\n};\n```\n\nPola po słowie `public` są dostępne poza klasą. Na tym etapie klasa przypomina strukturę, ale za chwilę ukryjemy jej dane i udostępnimy kontrolowane operacje.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nclass Prostokat\n{\npublic:\n    double szerokosc;\n    double wysokosc;\n};\n\nint main()\n{\n    Prostokat p;\n    p.szerokosc = 4.0;\n    p.wysokosc = 3.0;\n\n    cout << p.szerokosc * p.wysokosc << endl;\n    return 0;\n}\n```"
        },
        {
          "id": "02-zadania",
          "title": "Zadania",
          "context": "Obiekt i klasa",
          "kind": "tasks",
          "markdown": "1. Utwórz drugi obiekt i nadaj mu inne wymiary."
        },
        {
          "id": "03-metody",
          "title": "Metody",
          "context": "",
          "kind": "theory",
          "markdown": "Funkcja zdefiniowana w klasie jest metodą. Ma bezpośredni dostęp do pól obiektu.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nclass Prostokat\n{\npublic:\n    double szerokosc;\n    double wysokosc;\n\n    double pole() const\n    {\n        return szerokosc * wysokosc;\n    }\n\n    double obwod() const\n    {\n        return 2.0 * (szerokosc + wysokosc);\n    }\n};\n\nint main()\n{\n    Prostokat p = {4.0, 3.0};\n    cout << p.pole() << endl;\n    cout << p.obwod() << endl;\n    return 0;\n}\n```\n\n`const` po nawiasie metody oznacza, że metoda nie zmienia obiektu. Taką metodę można wywołać również dla stałego obiektu."
        },
        {
          "id": "04-zadania",
          "title": "Zadania",
          "context": "Metody",
          "kind": "tasks",
          "markdown": "1. Dodaj metodę sprawdzającą, czy prostokąt jest kwadratem."
        },
        {
          "id": "05-pola-prywatne-i-hermetyzacja",
          "title": "Pola prywatne i hermetyzacja",
          "context": "",
          "kind": "theory",
          "markdown": "Pola po słowie `private` są dostępne tylko wewnątrz klasy. Dzięki temu klasa może pilnować poprawności danych.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nclass Konto\n{\nprivate:\n    double saldo = 0.0;\n\npublic:\n    void wplata(double kwota)\n    {\n        if (kwota > 0.0)\n        {\n            saldo += kwota;\n        }\n    }\n\n    bool wyplata(double kwota)\n    {\n        if (kwota <= 0.0 || kwota > saldo)\n        {\n            return false;\n        }\n\n        saldo -= kwota;\n        return true;\n    }\n\n    double pobierzSaldo() const\n    {\n        return saldo;\n    }\n};\n\nint main()\n{\n    Konto konto;\n    konto.wplata(100.0);\n    konto.wyplata(30.0);\n\n    cout << konto.pobierzSaldo() << endl;\n    return 0;\n}\n```\n\nKod zewnętrzny nie może wykonać `konto.saldo = -1000`. Musi użyć metod, które sprawdzają warunki. Takie ukrywanie szczegółów nazywamy hermetyzacją."
        },
        {
          "id": "06-zadania",
          "title": "Zadania",
          "context": "Pola prywatne i hermetyzacja",
          "kind": "tasks",
          "markdown": "1. Sprawdź zwrócony wynik nieudanej wypłaty większej od salda.\n2. Dodaj metodę zerującą konto tylko wtedy, gdy saldo jest dodatnie."
        },
        {
          "id": "07-konstruktor",
          "title": "Konstruktor",
          "context": "",
          "kind": "theory",
          "markdown": "Konstruktor przygotowuje obiekt w chwili tworzenia. Ma taką samą nazwę jak klasa i nie podaje się przed nim typu wyniku.\n\n```cpp\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nclass Uczen\n{\nprivate:\n    string imie;\n    int punkty;\n\npublic:\n    Uczen(string nowe_imie, int nowe_punkty)\n        : imie(nowe_imie), punkty(nowe_punkty)\n    {\n        if (punkty < 0)\n        {\n            punkty = 0;\n        }\n    }\n\n    void dodajPunkty(int liczba)\n    {\n        if (liczba > 0)\n        {\n            punkty += liczba;\n        }\n    }\n\n    void wyswietl() const\n    {\n        cout << imie << \": \" << punkty << endl;\n    }\n};\n\nint main()\n{\n    Uczen uczen(\"Ala\", 15);\n    uczen.dodajPunkty(3);\n    uczen.wyswietl();\n    return 0;\n}\n```\n\nLista po dwukropku inicjalizuje pola przed wykonaniem ciała konstruktora."
        },
        {
          "id": "08-zadania",
          "title": "Zadania",
          "context": "Konstruktor",
          "kind": "tasks",
          "markdown": "1. Utwórz obiekt z ujemną liczbą punktów i sprawdź wynik.\n2. Zmień metodę tak, aby zwracała informację, czy dodanie punktów się udało."
        },
        {
          "id": "09-wiele-konstruktorow",
          "title": "Wiele konstruktorów",
          "context": "",
          "kind": "theory",
          "markdown": "Klasa może mieć kilka konstruktorów różniących się parametrami.\n\n```cpp\n#include <iostream>\n\nusing namespace std;\n\nclass Punkt\n{\nprivate:\n    double x;\n    double y;\n\npublic:\n    Punkt()\n        : x(0.0), y(0.0)\n    {\n    }\n\n    Punkt(double nowe_x, double nowe_y)\n        : x(nowe_x), y(nowe_y)\n    {\n    }\n\n    void przesun(double dx, double dy)\n    {\n        x += dx;\n        y += dy;\n    }\n\n    void wyswietl() const\n    {\n        cout << x << ' ' << y << endl;\n    }\n};\n\nint main()\n{\n    Punkt p;\n    Punkt q(2.0, 5.0);\n\n    p.wyswietl();\n    q.przesun(1.0, -2.0);\n    q.wyswietl();\n    return 0;\n}\n```\n\n`Punkt p;` wybiera konstruktor bez parametrów, a `Punkt q(2.0, 5.0);` konstruktor z dwoma parametrami."
        },
        {
          "id": "10-zadania",
          "title": "Zadania",
          "context": "Wiele konstruktorów",
          "kind": "tasks",
          "markdown": "1. Dodaj metodę obliczającą odległość punktu od początku układu."
        },
        {
          "id": "11-obiekty-automatyczne-i-dynamiczne",
          "title": "Obiekty automatyczne i dynamiczne",
          "context": "",
          "kind": "theory",
          "markdown": "```cpp\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nclass Produkt\n{\nprivate:\n    string nazwa;\n    double cena;\n\npublic:\n    Produkt(string nowa_nazwa, double nowa_cena)\n        : nazwa(nowa_nazwa), cena(nowa_cena)\n    {\n    }\n\n    void wyswietl() const\n    {\n        cout << nazwa << \": \" << cena << endl;\n    }\n};\n\nint main()\n{\n    Produkt zwykly(\"Zeszyt\", 8.0);\n    zwykly.wyswietl();\n\n    Produkt* dynamiczny = new Produkt(\"Pioro\", 25.0);\n    dynamiczny->wyswietl();\n\n    delete dynamiczny;\n    dynamiczny = nullptr;\n    return 0;\n}\n```\n\nObiekt zwykły zostanie zniszczony automatycznie na końcu bloku. Obiekt utworzony przez `new` wymaga `delete`.\n\nSpecjalna metoda nazywana destruktorem jest wywoływana podczas niszczenia obiektu. Ma nazwę klasy poprzedzoną znakiem `~`, na przykład `~Produkt()`. Jest potrzebna, gdy klasa sama zarządza zasobem wymagającym zwolnienia. Pisanie klas posiadających surową pamięć dynamiczną wymaga także poprawnego kopiowania i wykracza poza podstawy tej lekcji."
        },
        {
          "id": "12-klasa-a-struktura",
          "title": "Klasa a struktura",
          "context": "",
          "kind": "theory",
          "markdown": "W C++ zarówno `class`, jak i `struct` mogą mieć pola, metody i konstruktory. Najważniejsza różnica domyślna jest taka, że elementy `class` są prywatne, a elementy `struct` publiczne. Struktur używamy często do prostego grupowania danych, a klas do obiektów chroniących swój stan za pomocą metod."
        },
        {
          "id": "13-zadania-do-samodzielnego-wykonania",
          "title": "Zadania do samodzielnego wykonania",
          "context": "",
          "kind": "homework",
          "markdown": "1. Napisz klasę `Prostokat` z prywatnymi wymiarami, konstruktorem oraz metodami `pole`, `obwod` i `czyKwadrat`. Nie pozwól ustawić niedodatnich wymiarów.\n2. Napisz klasę `Licznik` z prywatną wartością, konstruktorem, metodami zwiększającą, zmniejszającą i odczytującą wartość. Zdecyduj, czy licznik może spaść poniżej zera.\n3. Napisz klasę `Uczen` przechowującą imię i punkty. Dodaj konstruktor, metodę dodającą tylko nieujemną liczbę punktów oraz metodę `wyswietl() const`. Utwórz tablicę trzech obiektów.\n4. Utwórz dynamiczny obiekt wybranej klasy, wywołaj jego metody przez `->`, a następnie poprawnie go usuń."
        }
      ]
    },
    {
      "number": 30,
      "id": "sprawdzian-30",
      "kind": "exam",
      "title": "Sprawdzian V",
      "sourceFile": "30_sprawdzian_v_lekcje_1_29.md",
      "exam": {
        "duration": "45 minut",
        "points": 20,
        "sourceScope": "materiał z lekcji 1–29",
        "topics": [
          {
            "number": 25,
            "title": "pliki i strumienie"
          },
          {
            "number": 26,
            "title": "łączenie struktur, funkcji i pamięci dynamicznej"
          },
          {
            "number": 27,
            "title": "lista jednokierunkowa"
          },
          {
            "number": 28,
            "title": "dynamiczny stos i kolejka"
          },
          {
            "number": 29,
            "title": "podstawy programowania obiektowego"
          }
        ]
      },
      "sections": []
    }
  ]
};
