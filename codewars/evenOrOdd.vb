Public Module SolutionClass
    Public Function EvenOrOdd(ByVal num As Integer) As String
        If num Mod 2 = 0 Then 
            EvenOrOdd = "Even" 
        Else 
            EvenOrOdd = "Odd" 
        End If
    End Function
End Module
