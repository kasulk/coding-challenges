Public Module Kata
    Public Function Summation(ByVal n As Integer) As Integer
        Dim Sum As Integer = 0

        For Num As Integer = 1 to n
            Sum += Num
        Next

        Return Sum
    End Function
End Module