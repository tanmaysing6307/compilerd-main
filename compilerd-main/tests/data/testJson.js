const testCases = [
    {
        name: 'cpp : hello world',
        reqObject: {
            language: 'cpp',
            script:
                '#include<bits/stdc++.h>\n' +
                'using namespace std;\n' +
                'int main(){\n' +
                '    cout << "hello world";\n' +
                'return 0;\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'cpp : print stdin',
        reqObject: {
            language: 'cpp',
            script:
                '#include<bits/stdc++.h>\n\n' +
                'using namespace std;\n' +
                'int main(){\n\n' +
                '    int a;\n' +
                '    while(cin >> a){\n' +
                '        cout << a << endl;\n' +
                '    }\n' +
                '    return 0;\n\n' +
                '}\n',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },

    },
    {
        name: 'nodejs : hello world',
        reqObject: {
            language: 'nodejs',
            script: 'console.log(\'hello world\')',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'nodejs : print stdin',
        reqObject: {
            language: 'nodejs',
            script:
                'process.stdin.setEncoding(\'utf8\'); \n ' +
                'process.stdin.on(\'data\', (input) => { \n ' +
                '  console.log(input); \n ' +
                ' \n ' +
                '}); \n ',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1 2 3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'python : hello world',
        reqObject: {
            language: 'python',
            script: 'print(\'hello world\')',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'python : print stdin',
        reqObject: {
            language: 'python',
            script:
                'try:\n' +
                '    while(True):\n' +
                '        line = input()\n' +
                '        if not line:\n' +
                '            break\n' +
                '        print(line)\n' +
                'except EOFError:\n' +
                '    pass',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1 2 3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'c : hello world',
        reqObject: {
            language: 'c',
            script:
                '#include<stdio.h>\n\n' +
                'int main(){\n\n' +
                '    printf("hello world");\n' +
                '    return 0;\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'c : print stdin',
        reqObject: {
            language: 'c',
            script:
                '#include <stdio.h>\n' +
                'int main() {\n' +
                '    int number;\n' +
                '    while (scanf("%d", &number) == 1) {\n' +
                '        printf("%d\\n", number);\n' +
                '    } \n' +
                '    return 0;\n' +
                '}',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'java : print stdin',
        reqObject: {
            language: 'java',
            script:
                'import java.util.Scanner;\n' +
                'public class Solution {\n' +
                '    public static void main(String[] args) {\n' +
                '        System.out.println("hello world");\n' +
                '    }\n' +
                '}\n',
        },
        expectedResponse: {
            val: 'hello world\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'java : print stdin',
        reqObject: {
            language: 'java',
            script:
                'import java.util.Scanner;\n' +
                'public class Solution {\n' +
                '    public static void main(String[] args) {\n' +
                '        Scanner scanner = new Scanner(System.in);\n' +
                '        while (scanner.hasNextInt()) {\n' +
                '            int number = scanner.nextInt();\n' +
                '            System.out.println(number);\n' +
                '        } \n' +
                '        scanner.close();\n' +
                '    }\n' +
                '}\n',
            stdin: '1 2 3',
        },
        expectedResponse: {
            val: '1\n2\n3\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'ruby : print hello world',
        reqObject: {
            language: 'ruby',
            script:
                'print "hello world"'
        },
        expectedResponse: {
            val: 'hello world',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'ruby : print stdin',
        reqObject: {
            language: 'ruby',
            script:
                'user_input = gets.chomp\n' +
                'puts user_input',
            stdin: '10\n'
        },
        expectedResponse: {
            val: '10\n',
            status: 200,
            error: 0,
        },
    },
    {
        name: 'TLE test',
        reqObject: {
            language: 'nodejs',
            script: 'for(let i=0 ; ; ){i++}',
        },
        expectedResponse: {
            val: 'Time limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'MLE test',
        reqObject: {
            language: 'python',
            script: 'one_gb_data = bytearray(1000 * 1024 * 1024)',
        },
        expectedResponse: {
            val: 'Memory limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'MLE test 2',
        reqObject: {
            language: 'python',
            script:
                'import time\n' +
                'def consume_memory(target_mb, duration_sec):\n' +
                '    float_size = 8\n' +
                '    floats_per_mb = (1024 * 1024) // float_size\n' +
                '    total_floats = target_mb * floats_per_mb\n' +
                '    iterations = int(duration_sec / 0.1)\n' +
                '    floats_per_iteration = total_floats // iterations\n' +
                '    memory_hog = []\n' +
                '    for _ in range(iterations):\n' +
                '        memory_hog.extend([0.0] * floats_per_iteration)\n' +
                '        time.sleep(0.1)\n' +
                'consume_memory(1000, 1)\n',
        },
        expectedResponse: {
            val: 'Memory limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'MLE test 3',
        reqObject: {
            language: 'python',
            script:
                'a = [100]\n' +
                'for i in a:\n' +
                '    a.append(i)\n',
        },
        expectedResponse: {
            val: 'Memory limit exceeded',
            status: 200,
            error: 1,
        },
    },
    {
        name: 'OPEN AI test promptv1',
        reqObject: {
            language: 'promptv1',
            prompt: 'The question is what is 2 plus 2. The answer given is 4.',
        },
        expectedResponse: {
            val: {},
            status: 200,
            error: 0,
        },
    },
    {
        name: 'OPEN AI test promptv2',
        reqObject: {
            language: 'promptv2',
            prompt: 'The question is what is 2 plus 2. The answer given is 4.',
        },
        expectedResponse: {
            val: {},
            status: 200,
            error: 0,
        },
    },
    //Additional test case for cpp
    {
        name: 'cpp : reverse string',
        reqObject: {
            language: 'cpp',
            script:
                '#include<bits/stdc++.h>\n' +
                'using namespace std;\n' +
                'int main(){\n' +
                '    string str;\n' +
                '    cin >> str;\n' +
                '    reverse(str.begin(), str.end());\n' +
                '    cout << str;\n' +
                '    return 0;\n' +
                '}\n',
            stdin: 'hello',
        },
        expectedResponse: {
            val: 'olleh',
            status: 200,
            error: 0,
        },
    },
    //Additional test case for Node.js
    {
        name: 'nodejs : sum of two numbers',
        reqObject: {
            language: 'nodejs',
            script: 
                'const readline = require("readline");\n' +
                'const rl = readline.createInterface({\n' +
                '  input: process.stdin,\n' +
                '  output: process.stdout\n' +
                '});\n' +
                'rl.on("line", (input) => {\n' +
                '  const nums = input.split(" ").map(Number);\n' +
                '  console.log(nums[0] + nums[1]);\n' +
                '  rl.close();\n' +
                '});\n',
            stdin: '4 5',
        },
        expectedResponse: {
            val: '9\n',
            status: 200,
            error: 0,
        },
    },
    //Additional test case for python
    {
        name: 'python : syntax error',
        reqObject: {
            language: 'python',
            script: 'print("hello world"',
        },
        expectedResponse: {
            val: 'SyntaxError: unexpected EOF while parsing',
            status: 200,
            error: 1,
        },
    },
    //Additional test case for C 
    {
        name: 'c : sum of two numbers',
        reqObject: {
            language: 'c',
            script:
                '#include<stdio.h>\n\n' +
                'int main(){\n' +
                '    int a, b;\n' +
                '    scanf("%d %d", &a, &b);\n' +
                '    printf("%d", a + b);\n' +
                '    return 0;\n' +
                '}\n',
            stdin: '8 9',
        },
        expectedResponse: {
            val: '17',
            status: 200,
            error: 0,
        },
    },
    //Additional test case for JAVA
    {

    name: 'java : large output',
    reqObject: {
        language: 'java',
        script:
            'public class Solution {\n' +
            '    public static void main(String[] args) {\n' +
            '        for (int i = 0; i < 100000; i++) {\n' +
            '            System.out.print(i + " ");\n' +
            '        }\n' +
            '    }\n' +
            '}\n',
    },
    expectedResponse: {
        val: Array.from({length: 100000}, (_, i) => i).join(' ') + ' ',
        status: 200,
        error: 0,
    },
},
//Additional test case for Ruby
{
    name: 'ruby : sum of two numbers',
    reqObject: {
        language: 'ruby',
        script:
            'a, b = gets.split.map(&:to_i)\n' +
            'puts a + b',
        stdin: '15 25\n',
    },
    expectedResponse: {
        val: '40\n',
        status: 200,
        error: 0,
    },
},
//Test Case for Typescript
{
    name: 'typescript : sum of two numbers',
    reqObject: {
        language: 'typescript',
        script:
            'const readline = require("readline");\n' +
            'const rl = readline.createInterface({\n' +
            '  input: process.stdin,\n' +
            '  output: process.stdout\n' +
            '});\n' +
            'rl.on("line", (input) => {\n' +
            '  const nums = input.split(" ").map(Number);\n' +
            '  console.log(nums[0] + nums[1]);\n' +
            '  rl.close();\n' +
            '});\n',
        stdin: '4 5',
    },
    expectedResponse: {
        val: '9\n',
        status: 200,
        error: 0,
    },
},
//Test Case for C#
{
    name: 'csharp : sum of two numbers',
    reqObject: {
        language: 'csharp',
        script:
            'using System;\n' +
            'class Program {\n' +
            '    static void Main() {\n' +
            '        string input = Console.ReadLine();\n' +
            '        string[] numbers = input.Split();\n' +
            '        int a = int.Parse(numbers[0]);\n' +
            '        int b = int.Parse(numbers[1]);\n' +
            '        Console.WriteLine(a + b);\n' +
            '    }\n' +
            '}\n',
        stdin: '6 7',
    },
    expectedResponse: {
        val: '13\n',
        status: 200,
        error: 0,
    },
},
//Test case for swift
{
    name: 'swift : sum of two numbers',
    reqObject: {
        language: 'swift',
        script:
            'import Foundation\n' +
            'let input = readLine()!\n' +
            'let numbers = input.split(separator: " ").map { Int($0)! }\n' +
            'print(numbers[0] + numbers[1])',
        stdin: '8 9',
    },
    expectedResponse: {
        val: '17\n',
        status: 200,
        error: 0,
    },
},
{
    name: 'swift : reverse string',
    reqObject: {
        language: 'swift',
        script:
            'import Foundation\n' +
            'let str = readLine()!\n' +
            'let reversed = String(str.reversed())\n' +
            'print(reversed)',
        stdin: 'swift',
    },
    expectedResponse: {
        val: 'tfiws\n',
        status: 200,
        error: 0,
    },
},
]

module.exports = { testCases }
