package org.example;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class CalculatorTest {

    private Calculator calculator;

    @Before
    public void setUp() {

        System.out.println(
                "Creating Calculator Object"
        );

        calculator =
                new Calculator();
    }

    @After
    public void tearDown() {

        System.out.println(
                "Destroying Calculator Object"
        );

        calculator = null;
    }

    @Test
    public void testAdd() {

        int result =
                calculator.add(10, 20);

        assertEquals(
                30,
                result
        );
    }

    @Test
    public void testMultiply() {

        int result =
                calculator.multiply(5, 4);

        assertEquals(
                20,
                result
        );
    }
}