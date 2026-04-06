#include <stdio.h>

int main() {
    char fname[50], ch;
    FILE *fps, *fpt;

    printf("Enter Filename: ");
    scanf("%s", fname);

    fps = fopen(fname, "r");
    if (fps == NULL) {
        printf("File not found!");
        return 0;
    }

    fpt = fopen("temp.txt", "w");

    ch = fgetc(fps);
    while (ch != EOF) {
        ch = ch + 100;
        fputc(ch, fpt);
        ch = fgetc(fps);
    }

    fclose(fps);
    fclose(fpt);

    fps = fopen(fname, "w");
    fpt = fopen("temp.txt", "r");

    ch = fgetc(fpt);
    while (ch != EOF) {
        fputc(ch, fps);
        ch = fgetc(fpt);
    }

    fclose(fps);
    fclose(fpt);

    printf("File Encrypted Successfully!");
    return 0;
}
