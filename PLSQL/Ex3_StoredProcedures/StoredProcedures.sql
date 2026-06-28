CREATE TABLE Accounts (
    AccountID NUMBER PRIMARY KEY,
    CustomerID NUMBER,
    AccountType VARCHAR2(20),
    Balance NUMBER(12,2)
);

CREATE TABLE Employees (
    EmployeeID NUMBER PRIMARY KEY,
    Name VARCHAR2(50),
    Department VARCHAR2(30),
    Salary NUMBER(10,2)
);

INSERT INTO Accounts VALUES (101, 1, 'Savings', 10000);
INSERT INTO Accounts VALUES (102, 2, 'Current', 15000);
INSERT INTO Accounts VALUES (103, 3, 'Savings', 25000);
INSERT INTO Accounts VALUES (104, 4, 'Savings', 5000);
INSERT INTO Accounts VALUES (105, 5, 'Current', 30000);
INSERT INTO Accounts VALUES (106, 6, 'Savings', 12000);
INSERT INTO Accounts VALUES (107, 7, 'Savings', 8000);
INSERT INTO Accounts VALUES (108, 8, 'Current', 18000);
INSERT INTO Accounts VALUES (109, 9, 'Savings', 22000);
INSERT INTO Accounts VALUES (110, 10, 'Savings', 35000);

INSERT INTO Employees VALUES (1, 'Rahul', 'IT', 50000);
INSERT INTO Employees VALUES (2, 'Priya', 'HR', 45000);
INSERT INTO Employees VALUES (3, 'Anish', 'IT', 60000);
INSERT INTO Employees VALUES (4, 'Sneha', 'Finance', 55000);
INSERT INTO Employees VALUES (5, 'Sai', 'IT', 70000);
INSERT INTO Employees VALUES (6, 'Kiran', 'HR', 40000);
INSERT INTO Employees VALUES (7, 'Meena', 'Finance', 65000);
INSERT INTO Employees VALUES (8, 'Arjun', 'IT', 52000);
INSERT INTO Employees VALUES (9, 'Pooja', 'Marketing', 48000);
INSERT INTO Employees VALUES (10, 'Ravi', 'Marketing', 58000);

COMMIT;


CREATE OR REPLACE PROCEDURE ProcessMonthlyInterest
IS
BEGIN
    UPDATE Accounts
    SET Balance = Balance + (Balance * 0.01)
    WHERE AccountType = 'Savings';

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Monthly interest processed successfully.'
    );
END;
/
-- EXEC ProcessMonthlyInterest;






CREATE OR REPLACE PROCEDURE UpdateEmployeeBonus
(
    p_department IN VARCHAR2,
    p_bonus IN NUMBER
)
IS
BEGIN
    UPDATE Employees
    SET Salary = Salary +
                 (Salary * p_bonus / 100)
    WHERE Department = p_department;

    COMMIT;

    DBMS_OUTPUT.PUT_LINE(
        'Bonus updated successfully.'
    );
END;
/
EXEC UpdateEmployeeBonus('IT',10);










SELECT * FROM Accounts;

CREATE OR REPLACE PROCEDURE TransferFunds
(
    p_from_account IN NUMBER,
    p_to_account IN NUMBER,
    p_amount IN NUMBER
)
IS
    v_balance NUMBER;
BEGIN

    SELECT Balance
    INTO v_balance
    FROM Accounts
    WHERE AccountID = p_from_account;

    IF v_balance >= p_amount THEN

        UPDATE Accounts
        SET Balance = Balance - p_amount
        WHERE AccountID = p_from_account;

        UPDATE Accounts
        SET Balance = Balance + p_amount
        WHERE AccountID = p_to_account;

        COMMIT;

        DBMS_OUTPUT.PUT_LINE(
            'Transfer Successful'
        );

    ELSE
        DBMS_OUTPUT.PUT_LINE(
            'Insufficient Balance'
        );

    END IF;

END;
/
EXEC TransferFunds(104,105,5000);

SELECT * FROM Accounts;






