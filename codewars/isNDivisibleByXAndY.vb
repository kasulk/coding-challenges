Public Module Kata
    Public Function IsDivisible(ByVal n As Integer, ByVal x As Integer, ByVal y As Integer) As Boolean
        IsDivisible = n Mod x = 0 And n Mod y = 0
    End Function
End Module